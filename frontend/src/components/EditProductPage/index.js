import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getAllProduct } from '../../store/product';
import './editproduct.css'

function EditProductPage() {

    const dispatch = useDispatch();
    const history = useHistory();

    // console.log('teeeeeeeeeeeeeeeeeeeeeeest', history);

    // const product = useSelector(state => state?.product?.product)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [productType, setProductType] = useState('');
    const [errors, setErrors] = useState([]);

    
    const product = useSelector(state => {
        return state.product;
    });

    const handleSubmit = (e) => {
        e.preventDefault();

    
        // history.push('/');
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
          value={productType}
          onChange={(e) => setProductType(e.target.value)}
        />
      </label>
      <button
        type="submit"
        disabled={errors.length > 0}
      >
        Edit your Product!
      </button>
    </form>
        </>
    );
    }

export default EditProductPage;