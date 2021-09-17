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

    const ownerId = req.user.id;

    // console.log(ownerId, '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')


    const { title, imageUrl, description, productTypeId } = req.body

    const newProduct = await Product.create({ ownerId, title, imageUrl, description, productTypeId: +productTypeId});

    // console.log(newProduct, "------------------------------------------------------")

    res.json(newProduct)
}))

router.patch('/:productId/edit', restoreUser, asyncHandler( async (req, res) => {

    // const productId = req.params.productId
    // const ownerId = req.user.id;


    const { title, imageUrl, description, productTypeId } = req.body

    const edittedProduct = await Product.findByPk(2);



    await edittedProduct.update({ title, imageUrl, description, productTypeId });


    res.json(edittedProduct)
}))

router.delete('/:productId', restoreUser, asyncHandler(async (req, res) => {


    // const singleProduct = await Product.findByPk(productId)
    const singleProduct = await Product.findByPk({where: { productId }});

    await singleProduct.destroy();

    const products = await Product.findAll({

    });


    res.json(products)
}));

module.exports = router;
