const express = require('express');
const Products = require('../models/Products');
const router = express.Router();

const Product = require('../models/Products');

router.get('/products/add', (req, res) => {
    res.render('products/new-product');
});

router.post('/products/new-product', async (req, res) => {
    const {name, category, price, description} = req.body;
    const errors = [];
    if(!name) {
        errors.push({text: 'Please Write a NAME'})
    }
    if(!category) {
        errors.push({text: 'Please Write a CATEGORY'})
    }
    if(!price) {
        errors.push({text: 'Please Write a PRICE'})
    }
    if(!description) {
        errors.push({text: 'Please Write a DESCRIPTION'})
    }
    if(errors.length > 0) {
        res.render('products/new-product', {
            errors,
            name, 
            category,
            price,
            description
        });
    } else {
        const newProduct = new Product({ name, category, price, description });
        await newProduct.save();
        res.redirect('/products')
    }
});

router.get('/products', async (req, res) => {
    const products = await Product.find().lean();
    res.render('products/all-products', { products });
    console.log(products)
});


module.exports = router;