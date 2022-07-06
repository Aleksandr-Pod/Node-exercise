const express = require('express');
const router = express.Router();

const { Schema, model } = require('mongoose');

const contactSchema = Schema({
    name: String,
    email: String,
    phone: String
})
const Contact = model('contact', contactSchema);

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
const add = async (req, res) => {
    console.log('работает =add=');
  try {
      const result = await Contact.create(req.body)
      res.status(201).json({
          message: 'success',
          code: 201,
          result
      })
  } catch (error) {
      res.status(400).json({
          messaage: 'Error from getAll',
          error
    })
  }
}
router.get('/', getAll);
router.post('/', add);

module.exports = router;


