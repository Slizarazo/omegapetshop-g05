const express = require('express');
const UsersService = require('../services/users.services');

const router = express.Router();
const service = new UsersService();

router.get('/', (req, res) => {
  const users = service.find();
    res.json(users);
})

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  })
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
