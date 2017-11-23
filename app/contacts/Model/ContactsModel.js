const connection = require('../../../database/dbconnect')
const cn = connection.connect()

// -------------------------------------------------------------------------- //
const listAllContacts = () => {
  return new Promise((resolve, reject) => {
    cn.query('SELECT * FROM contacts', (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        reject(err)
      }
    })
  })
}

// -------------------------------------------------------------------------- //
const saveNewContact = (data) => {
  return new Promise((resolve, reject) => {
    cn.query('INSERT INTO contacts SET ?', data, (err, result) => {
      if(!err) {
        data.id = result.insertId
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

// -------------------------------------------------------------------------- //
const updateContact = (data) => {
  return new Promise((resolve, reject) => {
    let query = 'UPDATE contacts SET name = ?, gender = ?, phone = ?, email = ?, whatsapp =? WHERE id = '+ data.id
    cn.query(query, [ data.name, data.gender, data.phone, data.email, data.whatsapp ], (err, result) => {
      if(!err) {
        resolve(result)
      } else {
        reject(err)
      }
    })
  })
}

// -------------------------------------------------------------------------- //
const deleteContactById = (id) => {
  return new Promise((resolve, reject) => {
    cn.query('DELETE FROM contacts WHERE id = ?', id, (err, result) => {
      if(!err) {
        resolve(result)
      } else {
        reject(err)
      }
    })
  })
}

// -------------------------------------------------------------------------- //
module.exports = {
  listAllContacts,
  saveNewContact,
  updateContact,
  deleteContactById
}
