const express = require('express');
const faker = require('faker');
const CategoryService = require('../services/category.services');

const router = express.Router();
const service = new CategoryService();

router.get('./:categoryId/products/:productId', (req, res) => {

})

router.post('/', (req, res) => {
  const products = service.find();
  res.json(products)
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  })
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'delete',
    id,
  })
});


module.exports = router;
