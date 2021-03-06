import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getAllReviews } from '../../store/review';
import './getallreviewspage.css'
import { NavLink } from 'react-router-dom';

function GetAllReviewsPage() {

    const dispatch = useDispatch();
    const history = useHistory();

    // const { productId } = useParams();

    // console.log('teeeeeeeeeeeeeeeeeeeeeeest', history);

    // const product = useSelector(state => state?.product?.product)
    
    
    const reviewList = useSelector(state => {
        return state.review.list;
    });

    // const review2List = useSelector(state => {
    //     return state.review;
    // });

    // const stateList = useSelector(state => {
    //     return state;
    // });
    
    useEffect(() => {
        dispatch(getAllReviews())
    },[dispatch])
    
    // useEffect(() => {
    //     dispatch();
    // }, [dispatch]);

    // console.log(productList)
    // console.log('teeeeeeeeeest -----------------------3', product.list)

    // console.log(reviewList, "11111111111111111111111111111111111")

    // console.log(review2List, "222222222222222222222222222222222222222222")

    // console.log(stateList, "33333333333333333333333333333333333333333")



    if (!reviewList) {
        return <div>things went wrong</div>;
    } else {
    return (
        <>
            <div className = 'fullproductpage'>
            {/* <div>{product[1].title}</div> */}
            {reviewList.map((review => (
            <div key={`fullreview_${review.id}`} className= 'products'>

                <div className = 'fullproducttitle'>{review.review}</div>

            </div>
            )))}
            </div>
        </>
    );
    }
};

export default GetAllReviewsPage;