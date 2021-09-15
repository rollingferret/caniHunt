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

// const getAllProductAction = product => ({
//         type: GET_ALLPRODUCT,
//         product
//     });

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
    let newState;
    switch (action.type) {
        case LOAD: {
            const allProduct = {};
            action.list.forEach(product => {
                allProduct[product.id] = product;
            });
            return {
              ...allProduct,
              ...state,
              list: sortList(action.list),
            };
        }
        case ADD_PRODUCT:
            newState = Object.assign({}, state);
            return newState;
        case GET_PRODUCT:
            newState = Object.assign({}, state);
            return newState;
        case EDIT_PRODUCT:
            newState = Object.assign({}, state);
            return newState;
        case DELETE_PRODUCT:
            newState = Object.assign({}, state);
            return newState;
        default:
            return state;
    };
};

export default productReducer;