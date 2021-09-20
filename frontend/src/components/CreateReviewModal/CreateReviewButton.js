import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { addReview } from '../../store/review';

function NewReviewForm(props) {

    const dispatch = useDispatch();
    const history = useHistory();

    const currentUser = useSelector((state) => state.session.user);


    // console.log('teeeeeeeeeeeeeeeeeeeeeeest', history);

    // const product = useSelector(state => state?.product?.product)
    const [review, setReview] = useState('');
    const [errors, setErrors] = useState([]);

    const {pathname} = history.location
    const singleProductId = pathname.split("/")[2]

    //need to get userId and productId

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReview = {
            userId: currentUser.id,
            productId: props.productId?props.productId:singleProductId,
            review: review
        };

        // console.log(newReview, '99999999999999999999999999999999999')
        // const newItem = await dispatch(addProduct(newProduct));


        dispatch(addReview(newReview));
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
        Post your Product!
      </button>
    </form>
        </>
    );
}

export default NewReviewForm;