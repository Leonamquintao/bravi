const router = require('express').Router()
const Contacts = require('../../app/contacts/ContactsController')

// List
router.get('/contacts', (request, response) => {
  Contacts.listAllContacts().then((data) => {
    response.status(200).send(data)
  })
})

/* Create */
router.post('/contacts', (request, response) => {
  Contacts.saveNewContact(request.body).then((data) => {
    response.status(200).send(data)
  })
})

/* Update */
router.put('/contacts/:conId', (request, response) => {
  Contacts.updateContact(request.body).then((data) => {
    response.status(200).send(data)
  })
})

/* Delete or destroy */
router.delete('/contacts/:conId', (request, response) => {
  User.deleteContactById(request.params.userId).then((data) => {
    response.status(200).send(data)
  })
})

module.exports = router
