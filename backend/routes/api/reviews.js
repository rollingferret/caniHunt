const express = require('express');
const asyncHandler = require('express-async-handler');
const { requireAuth, restoreUser } = require('../../utils/auth');
const { User, Product, Review } = require('../../db/models');


const router = express.Router();


router.get('/', restoreUser, asyncHandler( async (req, res) => {
    const products = await Review.findAll({

    })

    res.json(products)
}))

router.get('/:productId', restoreUser, asyncHandler( async (req, res) => {

    let { productId } = req.params

    const products = await Review.findAll({

        where: {
            productId: productId,
        }
    })

    res.json(products)
}))

router.get('/myreviews', restoreUser, requireAuth, asyncHandler( async (req, res) => {
    const ownerId = req.user.id;

    const products = await Product.findAll({

        where: {
            ownerId: ownerId,
        }
    })

    res.json(products)
}))

router.get('/:reviewId', restoreUser, asyncHandler( async (req, res) => {

    // console.log('9999999999999999999999999999999', req.params)
    let { reviewId } = req.params
    // console.log(productId)
    const singleProduct = await Product.findByPk(productId)

    res.json(singleProduct)
}))

router.post('/new', requireAuth, restoreUser, asyncHandler( async (req, res) => {

    // const userId = req.user.id;

    // console.log(ownerId, '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')


    // needs productId too
    const { review, userId, productId } = req.body

    const newReview = await Review.create({ review, userId, productId });

    // console.log(newProduct, "------------------------------------------------------")

    res.json(newReview)
}))

router.patch('/:reviewId/edit', requireAuth, restoreUser, asyncHandler( async (req, res) => {

    // const ownerId = req.user.id;

    // console.log(ownerId)
    // console.log(req.params.reviewId, '999999999999999999999999999')
    const { review } = req.body

    // console.log(req.body, '8988888888888888888888888888888888')

    const edittedReview = await Review.findByPk(req.params.reviewId);


    await edittedReview.update({ review });


    res.json(edittedReview)
}))

router.delete('/:reviewId/delete', requireAuth, restoreUser, asyncHandler(async (req, res) => {

    let { reviewId } = req.params
    // console.log(productId, '9999999999999999999999999999999999999999')
    // const singleProduct = await Product.findByPk(productId)
    // const singleProduct = await Product.findByPk({where: { productId }});
    const singleReview = await Review.findByPk(reviewId);

    // console.log(singleProduct, '9999999999999999999999999999999999')
    await singleReview.destroy();

    // const products = await Product.findAll({

    // });


    res.json(singleReview)
}));

module.exports = router;
