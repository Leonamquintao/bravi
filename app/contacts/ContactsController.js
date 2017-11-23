const ContactsModel = require('./Model/ContactsModel')

const Contacts = {

  listAllContacts () {
    return new Promise((resolve, reject) => {
      ContactsModel.listAllContacts().then((data) => {
        resolve(data)
      })
    })
  },

  saveNewContact (cdata) {
    return new Promise((resolve, reject) => {
      ContactsModel.saveNewContact(cdata).then((data) => {
        resolve(data)
      })
    })
  },

  updateContact (cdata) {
    return new Promise((resolve, reject) => {
      ContactsModel.updateContact(cdata).then((data) => {
        resolve(data)
      })
    })
  },

  deleteContactById (conId) {
    return new Promise((resolve, reject) => {
      ContactsModel.deleteContactById(conId).then((data) => {
        resolve(data)
      })
    })
  }

}

module.exports = Contacts
