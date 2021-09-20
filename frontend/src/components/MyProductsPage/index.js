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

    // const { userId } = useParams();


    // const { productId } = useParams();

    // console.log('teeeeeeeeeeeeeeeeeeeeeeest', history);

    // const product = useSelector(state => state?.product?.product)
    
    const currentUser = useSelector((state) => state.session.user);


    const productList = useSelector(state => {
        return state.product.list;
    });

    const allProductList = useSelector(state => {
        return state.product.allProducts;
    });
    
    // let productDetail = productList?.filter(product => product.ownerId === currentUser.id );

    // console.log(currentUser, '99999999999999999999999999999999999')

    let productDetails

    if (productList) {

        let productDetails = productList.filter(product => product.ownerId === currentUser.id );


        console.log(productDetails, '999999999952525299999525252999999999999999999')

    }

    useEffect(() => {
        dispatch(getmyAllProduct())
    },[dispatch, productDetails])
    
    // useEffect(() => {
    //     dispatch();
    // }, [dispatch]);

    console.log(productList, '23333333333333332322222222222222222')
    // console.log('teeeeeeeeeest -----------------------3', product.list)


    console.log('..................899999999999999999999999999999999.........')

    if (!productList) {
        return null;
    } else {
    return (
        <>
            <div className = 'fullproductpage'>
            {/* <div>{product[1].title}</div> */}
            {productList.map((product => (
            <div key={`myproduct_${product.id}`}>
            <NavLink to = {`/products/${product.id}`} className= 'products'>
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
            <DeleteButtonModal productId={product.id}/>
            </div>
            </div>

            )))}
            </div>
        </>
    );
    }
};

export default MyProductsPage;