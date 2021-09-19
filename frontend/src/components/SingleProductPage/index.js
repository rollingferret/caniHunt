import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getSingleProduct } from '../../store/product';
import EditFormModal from '../EditFormModal';
import DeleteButtonModal from '../DeleteProductModal';
import './singleproductpage.css'
import { NavLink } from 'react-router-dom';


function SingleProductPage({ isLoaded }) {


    const dispatch = useDispatch();
    const history = useHistory();

    // const { productId } = useParams();

    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
              <EditFormModal />
              <DeleteButtonModal />
            </>
          );
    } else {
      sessionLinks = (
        <>
        </>
      );
    }

    // console.log('teeeeeeeeeeeeeeeeeeeeeeest', history);
    // console.log('teeeeeeeeeeeeeeeeeeeeeeest', history.location);

    const {pathname} = history.location
    // console.log('teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', pathname)
    // console.log('teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', pathname.split("/")[2])

    const singleProductId = pathname.split("/")[2]

    // console.log(singleProductId, '99999999999999999999999999999999999999999')



    // const product = useSelector(state => state?.product?.product)

    // console.log(useParams, '------------------------------------------')
    
    const singleProduct = useSelector(state => {
        return state.product.singleProduct;
    });
    
    useEffect(() => {
        dispatch(getSingleProduct(singleProductId))
    },[dispatch])
    
    // useEffect(() => {
    //     dispatch();
    // }, [dispatch]);

    // console.log('problem------------------------2!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-', singleProduct)
    // console.log('teeeeeeeeeest -----------------------3', product.list)
    // console.log( singleProduct )



    if (!singleProduct) {
        return null;
    } else {
    return (
        <>
            <div className = 'fullproductpage'>
            {singleProduct.map((product => (
            <div key={product.id} className= 'products'>
                <div className = 'fullproductleft'>
                <img src={product.imageUrl} className= 'images' alt=''/>
                <div className='fullproductdescription'>
                <div className = 'fullproducttitle'>{product.title}</div>
                <div className = 'fullproductdesc'>{product.description}</div>
                <div className='fullproductbottom'>num reviews</div>
                </div>
            </div>
            <div className='fullproductright'>{ isLoaded && sessionLinks}</div>
            </div>
            )))}
            </div>

        </>
    );
    }
};

export default SingleProductPage;