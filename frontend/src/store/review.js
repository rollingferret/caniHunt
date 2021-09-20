import { csrfFetch } from './csrf';

const ADD_REVIEW = 'review/ADD_REVIEW';
const GET_REVIEW = 'review/GET_REVIEW';
const LOAD_SINGLE_REVIEW = 'review/LOAD_SINGLE_REVIEW';
const GET_ALLREVIEW = 'review/GET_ALLREVIEW';
const EDIT_REVIEW = 'review/EDIT_REVIEW';
const DELETE_REVIEW = 'review/DELETE_REVIEW';
const LOAD = 'review/LOAD';


const load = list => ({
    type: LOAD,
    list,
});

const singleReviewLoad = (singleReview) => {
    return {
        type: LOAD_SINGLE_REVIEW,
        singleReview
    };
};


const newReviewAction = (addedReview) => {
    return {
        type: ADD_REVIEW,
        addedReview
    };
};

const editReviewAction = (editedReview) => {
    return {
        type: EDIT_REVIEW,
        editedReview
    };
};

const deleteReviewAction = (deleteReview) => {
    return {
        type: DELETE_REVIEW,
        deleteReview
    }
}

export const getAllReviews = () => async (dispatch) => {
    // const response = await csrfFetch(`/api/products/${productId}`);
    // const response = await csrfFetch(`/api/products/`);
    // const product = await response.json();
    // dispatch(getAllProductAction(product));
    // return product

    const response = await fetch(`/api/reviews`);
    
    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
        return list;
    }
};

export const getAllReviewsSingleProduct = (reviewId) => async (dispatch) => {
    // const response = await csrfFetch(`/api/products/${productId}`);
    // const response = await csrfFetch(`/api/products/`);
    // const product = await response.json();
    // dispatch(getAllProductAction(product));
    // return product

    const response = await fetch(`/api/reviews/${reviewId}`);
    
    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
        return list;
    }
};

export const getmyAllReviews = () => async (dispatch) => {
    // const response = await csrfFetch(`/api/products/${productId}`);
    // const response = await csrfFetch(`/api/products/`);
    // const product = await response.json();
    // dispatch(getAllProductAction(product));
    // return product

    const response = await fetch(`/api/myreviews`);
    
    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
        return list;
    }
};


export const getSingleReview = (reviewId) => async (dispatch) => {
    // const response = await csrfFetch(`/api/products/${productId}`);
    // const response = await csrfFetch(`/api/products/`);
    // const product = await response.json();
    // dispatch(getAllProductAction(product));
    // return product

    const response = await fetch(`/api/reviews/${reviewId}`);
    
    if (response.ok) {
        const singleReview = await response.json();
        dispatch(singleReviewLoad(singleReview));
        return singleReview;
    }
};

export const addReview = ({ review }) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/new`, {
        method: 'POST',
        // headers: {
        //     "Content-Type": "application/json"
        // },
        body: JSON.stringify({ review })
    });

    const addedReview = await response.json();

    // console.log(addedProduct, '2222222222222222222222222222222222222222222222222222222222222222')

    dispatch(newReviewAction(addedReview));
    return addedReview;
}

// export const editProduct = (editedProduct) => async (dispatch) => {
    export const editReview = ({ review }) => async (dispatch) => {

    // const { id } = editProduct;
    // need to grab id somehow
    // const response = await csrfFetch(`/api/products/${parseInt(id)}`, {
    // const response = await csrfFetch(`/api/products/${id}/edit`, {

    const response = await csrfFetch(`/api/reviews/2/edit`, {


        method: 'PATCH',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        body: JSON.stringify({ review })
    });

    const editedReview = await response.json();
    dispatch(editReviewAction(editedReview));
    return editedReview;
};

export const deleteReview = ({ id }) => async (dispatch) => {

    // const { id } = editProduct;
    // need to grab id somehow
    // const response = await csrfFetch(`/api/products/${parseInt(id)}`, {
    const response = await csrfFetch(`/api/reviews/${id}/delete`, {

        method: 'DELETE',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        body: JSON.stringify({ id })
    });

    const deletedReview = await response.json();
    dispatch(deleteReviewAction(deletedReview));

    return deletedReview;
};



const initialState = {};


const sortList = (list) => {
    return list.sort((reviewA, reviewB) => {
      return reviewB.id - reviewA.id;
    }).map((review) => review);
  };


const reviewReducer = (state=initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD: {

            return {
                ...state,
                list: sortList(action.list)
            };
        }
        case LOAD_SINGLE_REVIEW: {

            return {
                ...state,
                singleProduct: [ action.singleReview ],
            };

        }
        case ADD_REVIEW:


            return { ...state, list: [...state.list, action.addedReview ]};


        case GET_REVIEW:
            newState = Object.assign({}, state);
            newState.product = action.product;
            return newState;

        case EDIT_REVIEW: {

            newState = {...state};
            const reviewToupdate = newState.list.find((review) => review.id === action.editedReview.id)

            let returnedState = newState.list.map(review => {
                    if (review.id === reviewToupdate.id) {
                        return action.editedReview
                    } else {
                        return review
                    }
            })

            newState.list = returnedState;
            return newState;
        }
           
        case DELETE_REVIEW: {
            

                newState = {...state};
                const reviewToDelete = newState.list.find((review) => review.id === action.deleteReview.id)

                let returnedState = newState.list.filter(review => review.id !== reviewToDelete.id)
                    
                // returnedState.push(action.editSpot);
                newState.list = returnedState;
                return newState;
        }

        default:
            return state;
    };
};

export default reviewReducer;