import { useEffect, useState } from 'react';
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { addProduct } from '../../store/product';



function NewProductForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    // console.log('teeeeeeeeeeeeeeeeeeeeeeest', history);

    // const product = useSelector(state => state?.product?.product)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [productTypeId, setProductTypeId] = useState('');
    const [errors, setErrors] = useState([]);


    function reloadPage(){ 
        window.location.reload(); 
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            title: title,
            description: description,
            imageUrl: imageUrl,
            productTypeId: productTypeId
        };

        // const newItem = await dispatch(addProduct(newProduct));


        dispatch(addProduct(newProduct));
        history.push(`/myproducts`);
        reloadPage()
        // history.push(`/users/${userId}/`);
        }
    
    return (
        <>
            <form className="product-form" onSubmit={handleSubmit}>
      <label>
        Title
        <input
          type="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Description
        <input
          type="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Image Url
        <input
          type="imageUrl"
          name="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </label>
      <label>
        Product Type
        <input
          type="productType"
          name="productType"
          value={productTypeId}
          onChange={(e) => setProductTypeId(e.target.value)}
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

export default NewProductForm;