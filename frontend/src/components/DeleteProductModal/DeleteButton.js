import { useEffect, useState } from 'react';
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { deleteProduct  } from '../../store/product';

function DeleteButtonModal() {

  const dispatch = useDispatch();
  const history = useHistory();

  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
      e.preventDefault();
    //   console.log('You clicked submit.');

      const deletedProduct = {
          id: 4
      };

      // const newItem = await dispatch(addProduct(newProduct));


      dispatch(deleteProduct(deletedProduct));
      history.push(`/`);
      // history.push(`/users/${userId}/`);
      }
  
  return (
      <>
    <form className='delete-button' onSubmit={handleSubmit}>
    <button
        type="submit"
        disabled={errors.length > 0}
      >
        Delete your Product!
      </button>
    </form>
      </>
  );
}


export default DeleteButtonModal;