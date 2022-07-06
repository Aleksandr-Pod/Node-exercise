const express = require('express');
const router = express.Router();

const { Schema, model } = require('mongoose');

const contactSchema = Schema({
    name: String,
    email: String,
    phone: String
})
const Contact = model('contacts', contactSchema);

const getAll = async (req, res) => {
    console.log('работает getAll');
  try {
      const result = await Contact.find()
      res.status(200).json({
          message: 'success',
          code: 200,
          result
      })
  } catch (error) {
      res.status(400).json({
          messaage: 'Error from getAll',
          error: error
    })
  }
}

router.get('/', getAll);
module.exports = router;


