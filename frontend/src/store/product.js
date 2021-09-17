import { csrfFetch } from './csrf';

const ADD_PRODUCT = 'product/ADD_PRODUCT';
const GET_PRODUCT = 'product/GET_PRODUCT';
const GET_ALLPRODUCT = 'product/GET_ALLPRODUCT';
const EDIT_PRODUCT = 'product/EDIT_PRODUCT';
const DELETE_PRODUCT = 'product/DELETE_PRODUCT';
const LOAD = 'product/LOAD';


const load = list => ({
    type: LOAD,
    list,
});


const newProductAction = (addedProduct) => {
    return {
        type: ADD_PRODUCT,
        addedProduct
    };
};

const editProductAction = (editedProduct) => {
    return {
        type: EDIT_PRODUCT,
        editedProduct
    };
};

const deleteProductAction = (deleteProduct) => {
    return {
        type: DELETE_PRODUCT,
        deleteProduct
    }
}
// const getAllProductAction = product => ({
//         type: GET_ALLPRODUCT,
//         product
//     });

// forgot () syntax
// export const getAllProducts = () => async dispatch => {
//     const response = await fetch(`/api/products`);
    
//     if (response.ok) {
//         const list = await response.json();
//         dispatch(load(list));
//     }
// };

export const getAllProduct = () => async (dispatch) => {
    // const response = await csrfFetch(`/api/products/${productId}`);
    // const response = await csrfFetch(`/api/products/`);
    // const product = await response.json();
    // dispatch(getAllProductAction(product));
    // return product

    const response = await fetch(`/api/products`);
    
    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
    }
};

export const addProduct = ({ title, imageUrl, description, productTypeId }) => async (dispatch) => {
    const response = await csrfFetch(`/api/products/new`, {
        method: 'POST',
        // headers: {
        //     "Content-Type": "application/json"
        // },
        body: JSON.stringify({ title, imageUrl, description, productTypeId })
    });

    const addedProduct = await response.json();

    // console.log(addedProduct, '2222222222222222222222222222222222222222222222222222222222222222')

    dispatch(newProductAction(addedProduct));
    return addedProduct;
}

// export const editProduct = (editedProduct) => async (dispatch) => {
    export const editProduct = ({ title, imageUrl, description, productTypeId }) => async (dispatch) => {

    // const { id } = editProduct;
    // need to grab id somehow
    // const response = await csrfFetch(`/api/products/${parseInt(id)}`, {
    const response = await csrfFetch(`/api/products/2/edit`, {

        method: 'PATCH',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        body: JSON.stringify({ title, imageUrl, description, productTypeId })
    });

    const editedItem = await response.json();
    dispatch(editProductAction(editedItem));
    return editedItem;
};

// const addProduct = ({ title, imageUrl, description, productTypeId }) => async (dispatch) => {
//     const response = await csrfFetch(`/api/product/new`, {
//     method: 'POST',
//     body: JSON.stringify({title, imageUrl, description, productTypeId })
//     }

// export const editProduct = (productId, product) => async (dispatch) => {
//     const response = await csrfFetch(`/api/products/${productId}`, {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(product)
//     });
//     const edittedProduct = await response.json();
    
//     dispatch(editProductAction(edittedProduct));
//     return edittedProduct;
// }

// export const getAllProduce = (state) => Object.values(state.produce);


// const getProductAction = () => {
//     return {
//         type: GET_PRODUCT,
//         product
//     };
// };

// const editProductAction = () => {
//     return {
//         type: EDIT_PRODUCT,
//         product
//     };
// };

const initialState = {};
// export const getProduct = () => async (dispatch) => {
//     const response = await csrfFetch(`/api/products/${productId}`);
//     // const response = await csrfFetch(`/api/products/`);
//     const product = await response.json();
//     dispatch(getProductAction(product));
//     return product
// };
const sortList = (list) => {
    return list.sort((productA, productB) => {
      return productA.id - productB.id;
    }).map((product) => product);
  };



// export const addProduct = () => async (dispatch) => {

// };

// export const editProduct = () => async (dispatch) => {

// };

const productReducer = (state=initialState, action) => {
    let newState, newProduct;
    switch (action.type) {
        case LOAD: {
            const allProduct = {};
            action.list.forEach(product => {
                allProduct[product.id] = product;
            });
            // console.log(allProduct, '4444444444444444444444444444444444444444444444444444444')
            return {
                ...state,
                allProducts: { ...allProduct },
                list: sortList(action.list),
            };
        }
        case ADD_PRODUCT:
            // newState = Object.assign({}, state);
            // newState.product = action.product;
            // return newState;
            // return {
            //     ...state,
            //     product: [
            //         ...state.product, {
            //         }
            //     ]


            // }

            return { ...state, list: [...state.list, action.addedProduct ]};


    //         console.log(action.product);
    //   return {
    //     ...state,
    //     [action.list]: {
    //       ...state[action.product],
    //       product: [...state[action.product], action.product],
    //     },
    //   };
        // case GET_PRODUCT:
        //     newState = Object.assign({}, state);
        //     newState.product = action.product;
        //     return newState;
        case EDIT_PRODUCT:
            // newState = Object.assign({}, state);
            // newProduct = action.editedProduct;
            // newState[newProduct.id] = newProduct;
            // return newState;
            return {
                ...state,
                [action.list]: action.editedProduct,
                // [action.product.id]: action.editedProduct,
                // do i want to be in product or list???
              };
            //WHERE IS THIS ID COMINNG FROM?
            // return [...state, action.editedProduct];
            // will only add to


        // case DELETE_PRODUCT:
        //     newState = Object.assign({}, state);
        //     return newState;
        default:
            return state;
    };
};

export default productReducer;