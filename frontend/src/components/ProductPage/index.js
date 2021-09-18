import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getAllProduct } from '../../store/product';
import './fullproductpage.css'


function ProductPage() {

    const dispatch = useDispatch();
    const history = useHistory();

    // const { productId } = useParams();

    // console.log('teeeeeeeeeeeeeeeeeeeeeeest', history);

    // const product = useSelector(state => state?.product?.product)
    
    
    const productList = useSelector(state => {
        return state.product.list;
    });
    
    useEffect(() => {
        dispatch(getAllProduct())
    },[dispatch])
    
    // useEffect(() => {
    //     dispatch();
    // }, [dispatch]);

    // console.log(productList)
    // console.log('teeeeeeeeeest -----------------------3', product.list)


    if (!productList) {
        return null;
    } else {
    return (
        <>
            <div className = 'fullproductpage'>
            {/* <div>{product[1].title}</div> */}
            {productList.map((product => (
            <div key={product.id} className= 'products'>
                <div className = 'fullproductleft'>
                <img src={product.imageUrl} className= 'images' alt=''/>
                <div className='fullproductdescription'>
                <div className = 'fullproducttitle'>{product.title}</div>
                <div className = 'fullproductdesc'>{product.description}</div>
                <div className='fullproductbottom'>num reviews</div>
                </div>
            </div>
            <div className='fullproductright'></div>
            </div>
            )))}
            </div>
        </>
    );
    }
};

export default ProductPage;