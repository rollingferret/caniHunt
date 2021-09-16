const express = require('express');
const asyncHandler = require('express-async-handler');
const { requireAuth, restoreUser } = require('../../utils/auth');
const { User, Product } = require('../../db/models');


const productList = require('../../db/models/product.js');


const router = express.Router();


router.get('/', restoreUser, asyncHandler( async (req, res) => {
    const products = await Product.findAll({

    })

    res.json(products)
}))

router.get('/:productId', restoreUser, asyncHandler( async (req, res) => {
    const productId = req.params.productId
    // console.log('-----------------------------', req.params.productId)
    // console.log('-----------------------------2', productId)

    const singleProduct = await Product.findByPk(productId)

    res.json(singleProduct)
}))

router.post('/new', restoreUser, asyncHandler( async (req, res) => {

    // const ownerId = req.user.id;

    console.log(ownerId, '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')


    const { title, imageUrl, description, productTypeId } = req.body

    const newProduct = await Product.create({ title, imageUrl, description});



    res.json(newProduct)
}))

router.patch('/:productId/edit', restoreUser, asyncHandler( async (req, res) => {

    const productId = req.params.productId
    const ownerId = req.user.id;

    const { title, imageUrl, description, productTypeId } = req.body

    const newProduct = await Product.findByPk(productId);
    await newProduct.update({ title, imageUrl, description, productTypeId });


    res.json(newProduct)
}))

router.delete('/:productId', restoreUser, asyncHandler(async (req, res) => {
    const productId = req.params.productId
    const ownerId = req.user.id;

    // const singleProduct = await Product.findByPk(productId)
    const singleProduct = await Product.findByPk({where: { productId }});

    await singleProduct.destroy();

    const products = await Product.findAll({

    });


    res.json(products)
}));

module.exports = router;
