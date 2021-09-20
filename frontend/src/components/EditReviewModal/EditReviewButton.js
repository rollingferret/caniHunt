import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { editReview } from '../../store/review';

function EditReviewForm(props) {

    const dispatch = useDispatch();
    const history = useHistory();

    const currentUser = useSelector((state) => state.session.user);


    // console.log('teeeeeeeeeeeeeeeeeeeeeeest', history);

    // const product = useSelector(state => state?.product?.product)
    const [review, setReview] = useState('');
    const [errors, setErrors] = useState([]);

    const {pathname} = history.location

    // console.log(props, 'teeeeeeeeee99999999999999999999999999999eeeeeest')

    //need to get userId and productId

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(props.reviewId, 'teeeeeeeeee99999999999999999999999999999eeeeeest')

        const edittedReview = {
            id: props.reviewId,
            review: review
        };

        // console.log(edittedReview, '777777777777777777777777777777777777777777777')

        // console.log(newReview, '99999999999999999999999999999999999')
        // const newItem = await dispatch(addProduct(newProduct));


        dispatch(editReview(edittedReview));
        history.push(pathname);
        // history.push(`/users/${userId}/`);
        }
    
    return (
        <>
            <form className="product-form" onSubmit={handleSubmit}>
      <label>
        Review
        <input
          type="review"
          name="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </label>
      <button
        type="submit"
        disabled={errors.length > 0}
      >
        Edit your Review!
      </button>
    </form>
        </>
    );
}

export default EditReviewForm;