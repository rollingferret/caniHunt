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

router.get('/myproducts', restoreUser, requireAuth, asyncHandler( async (req, res) => {
    const ownerId = req.user.id;

    const products = await Product.findAll({

        where: {
            ownerId: ownerId,
        }
    })

    res.json(products)
}))

router.get('/:productId', restoreUser, asyncHandler( async (req, res) => {

    // console.log('9999999999999999999999999999999', req.params)
    let { productId } = req.params
    // console.log(productId)
    const singleProduct = await Product.findByPk(productId)

    res.json(singleProduct)
}))

router.post('/new', requireAuth, restoreUser, asyncHandler( async (req, res) => {

    const ownerId = req.user.id;

    // console.log(ownerId, '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')


    const { title, imageUrl, description, productTypeId } = req.body

    const newProduct = await Product.create({ ownerId, title, imageUrl, description, productTypeId: +productTypeId});

    // console.log(newProduct, "------------------------------------------------------")

    res.json(newProduct)
}))

router.patch('/:productId/edit', requireAuth, restoreUser, asyncHandler( async (req, res) => {

    // const productId = req.params.productId
    // const ownerId = req.user.id;
    let { productId } = req.params
    // console.log(productId)

    const { title, imageUrl, description, productTypeId } = req.body

    const edittedProduct = await Product.findByPk(productId);



    await edittedProduct.update({ title, imageUrl, description, productTypeId });


    res.json(edittedProduct)
}))

router.delete('/:productId/delete', requireAuth, restoreUser, asyncHandler(async (req, res) => {

    let { productId } = req.params
    // console.log(productId, '9999999999999999999999999999999999999999')
    // const singleProduct = await Product.findByPk(productId)
    // const singleProduct = await Product.findByPk({where: { productId }});
    const singleProduct = await Product.findByPk(productId);

    // console.log(singleProduct, '9999999999999999999999999999999999')
    await singleProduct.destroy();

    // const products = await Product.findAll({

    // });


    res.json(singleProduct)
}));

module.exports = router;
