import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { deleteReview } from '../../store/review';

function DeleteReviewForm(props) {

    const dispatch = useDispatch();
    const history = useHistory();

    const currentUser = useSelector((state) => state.session.user);


    // console.log('teeeeeeeeeeeeeeeeeeeeeeest', history);

    // const product = useSelector(state => state?.product?.product)
    const [review, setReview] = useState('');
    const [errors, setErrors] = useState([]);

    const {pathname} = history.location
    // const singleProductId = pathname.split("/")[2]

    //need to get userId and productId

    const handleSubmit = (e) => {
        e.preventDefault();

        const deleteReviewitem= {
            id: props.reviewId,
          };
    

        // console.log(newReview, '99999999999999999999999999999999999')
        // const newItem = await dispatch(addProduct(newProduct));


        dispatch(deleteReview(deleteReviewitem));
        history.push(pathname);
        // history.push(`/users/${userId}/`);
        }
    
    return (
        <>
        <form className='delete-button' onSubmit={handleSubmit}>
        <button
            type="submit"
            disabled={errors.length > 0}
          >
            Delete your Review!
          </button>
        </form>
          </>
      );
}

export default DeleteReviewForm;