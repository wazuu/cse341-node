const express = require('express');
const { requiresAuth } = require('express-openid-connect');
const router = express.Router();

const contactsController = require('../controller/players');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', requiresAuth(), contactsController.createContact);

router.put('/:id', requiresAuth(), contactsController.updateContact);

router.delete('/:id', requiresAuth(), contactsController.deleteContact);

module.exports = router;