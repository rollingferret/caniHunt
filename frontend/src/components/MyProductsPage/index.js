import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getAllProduct, getmyAllProduct } from '../../store/product';
import './myproductspage.css'
import { NavLink } from 'react-router-dom';
import EditFormModal from '../EditFormModal';
import DeleteButtonModal from '../DeleteProductModal';

function MyProductsPage() {

    const dispatch = useDispatch();
    const history = useHistory();

    // const { productId } = useParams();

    // console.log('teeeeeeeeeeeeeeeeeeeeeeest', history);

    // const product = useSelector(state => state?.product?.product)
    
    
    const productList = useSelector(state => {
        return state.product.list;
    });
    
    useEffect(() => {
        dispatch(getmyAllProduct())
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
                <>
            <NavLink to = {`/products/${product.id}`} key={`myproduct_${product.id}`} className= 'products'>
                <div className = 'fullproductleft'>
                <img src={product.imageUrl?product.imageUrl:'https://cdn.iconscout.com/icon/premium/png-256-thumb/no-image-1765819-1505608.png'} className= 'images' alt=''/>
                <div className='fullproductdescription'>
                <div className = 'fullproducttitle'>{product.title}</div>
                <div className = 'fullproductdesc'>{product.description}</div>
                <div className='fullproductbottom'>num reviews</div>
                </div>
            </div>
            </NavLink>
            <div className='fullproductright'>              
            <EditFormModal productId={product.id}/>
            <DeleteButtonModal />
            </div>
                </>
            )))}
            </div>
        </>
    );
    }
};

export default MyProductsPage;