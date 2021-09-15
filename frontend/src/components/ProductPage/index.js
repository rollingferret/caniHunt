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
        return state.product;
    });
    
    useEffect(() => {
        dispatch(getAllProduct())
    },[dispatch])
    
    // useEffect(() => {
    //     dispatch();
    // }, [dispatch]);

    console.log('test------------------------2-', product)
    console.log('teeeeeeeeeest -----------------------3', product.list)

    let test = product.list

    if (!product.list) {
        return null;
    } else {
    return (
        <>
            <div>TEEEEEEEEEEST</div>
            <div>{product[1].title}</div>
            <ul>{test.map((product => (
            <div key={product.id} className= 'products'>
            <li>{product.id}</li>
            <li>{product.description}</li>
            <li>{product.imageUrl}</li>
            </div>
            )))}
            </ul>
        </>
    );
    }
};

export default ProductPage;