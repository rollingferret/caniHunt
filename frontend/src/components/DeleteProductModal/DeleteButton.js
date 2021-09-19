import { useEffect, useState } from 'react';
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { deleteProduct  } from '../../store/product';

function DeleteButtonModal(props) {

  const dispatch = useDispatch();
  const history = useHistory();

  const [errors, setErrors] = useState([]);

  const {pathname} = history.location
  // console.log('teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', pathname)
  // console.log('teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', pathname.split("/")[2])

  const singleProductId = pathname.split("/")[2]

  // console.log(singleProductId, '99999999999999999999999999999999999999999')

  function reloadPage(){ 
    window.location.reload(); 
}

  const handleSubmit = (e) => {
      e.preventDefault();
    //   console.log('You clicked submit.');

      const deletedProduct = {
        id: props.productId?props.productId:singleProductId,
      };

      // const newItem = await dispatch(addProduct(newProduct));


      dispatch(deleteProduct(deletedProduct));
      history.push(`/myproducts`);
      reloadPage()
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