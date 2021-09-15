import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getAllProduct } from '../../store/product';


function ProductPage() {

    const dispatch = useDispatch();
    const history = useHistory();

    const { productId } = useParams();

    // console.log('teeeeeeeeeeeeeeeeeeeeeeest', history);

    // const product = useSelector(state => state?.product?.product)
    
    
    const product = useSelector(state => {
        // return state.product.GET_ALLPRODUCT;
        return state.product;
    });
    
    useEffect(() => {
        dispatch(getAllProduct())
    },[dispatch])
    
    // useEffect(() => {
    //     dispatch();
    // }, [dispatch]);

    console.log('test------------------------2-', product)
    console.log('teeeeeeeeeest -----------------------3', product.map)

    if (!product[1]) {
        return null;
    } else {
    return (
        <>
            <div>TEEEEEEEEEEST</div>
            <div>{product[1].title}</div>
            <ul>

            </ul>
        </>
    );
    }
};

export default ProductPage;