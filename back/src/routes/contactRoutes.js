const express = require('express');
const router = express.Router();
const { createContact, getContacts, updateContact, deleteContact } = require('../controllers/contactController');
const auth = require('../middleware/auth');

router.use(auth);

router.route('/')
  .post(createContact)
  .get(getContacts);

router.route('/:id')
  .patch(updateContact)
  .delete(deleteContact);

module.exports = router;