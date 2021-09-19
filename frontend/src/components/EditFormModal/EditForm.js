import { useEffect, useState } from 'react';
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { editProduct } from '../../store/product';

function EditForm() {

  const dispatch = useDispatch();
  const history = useHistory();

  // console.log('teeeeeeeeeeeeeeeeeeeeeeest', history);

  // const product = useSelector(state => state?.product?.product)
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [productTypeId, setProductTypeId] = useState('');
  const [errors, setErrors] = useState([]);

    // console.log('teeeeeeeeeeeeeeeeeeeeeeest', history);
    // console.log('teeeeeeeeeeeeeeeeeeeeeeest', history.location);

    const {pathname} = history.location
    // console.log('teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', pathname)
    // console.log('teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', pathname.split("/")[2])

    const singleProductId = pathname.split("/")[2]

    console.log(singleProductId, '99999999999999999999999999999999999999999')


  function reloadPage(){ 
      window.location.reload(); 
  }

  const handleSubmit = (e) => {
      e.preventDefault();

      const edittedProduct = {
          id: singleProductId,
          title: title,
          description: description,
          imageUrl: imageUrl,
          productTypeId: productTypeId
      };

      // const newItem = await dispatch(addProduct(newProduct));


      dispatch(editProduct(edittedProduct));
      history.push(pathname);
      reloadPage()
      // history.push(`/users/${userId}/`);
      }
  
  return (
      <>
      <form className="edit-form" onSubmit={handleSubmit}>
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
      Edit your Product!
    </button>
  </form>
      </>
  );
}

export default EditForm;


// import React, { useState } from "react";
// import * as sessionActions from "../../store/session";
// import { useDispatch } from "react-redux";

// function EditForm() {
//   const dispatch = useDispatch();
//   const [credential, setCredential] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setErrors([]);
//     return dispatch(sessionActions.login({ credential, password })).catch(
//       async (res) => {
//         const data = await res.json();
//         if (data && data.errors) setErrors(data.errors);
//       }
//     );
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <ul>
//         {errors.map((error, idx) => (
//           <li key={idx}>{error}</li>
//         ))}
//       </ul>
//       <label>
//         Username or Email
//         <input
//           type="text"
//           value={credential}
//           onChange={(e) => setCredential(e.target.value)}
//           required
//         />
//       </label>
//       <label>
//         Password
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </label>
//       <button type="submit">Log In</button>
//     </form>
//   );
// }

// export default EditForm;
