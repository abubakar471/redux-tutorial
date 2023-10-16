const { createStore, combineReducers } = require("redux");

// products constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// cart constants
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEM = "ADD_CART_ITEM";

// initial product state
const initialProductsState = {
    products : ["sugar", 'salt'],
    numOfProducts : 2
}

// initial cart state
const initialCartState = {
    cart : ["sugar"],
    numOfProducts : 1
}

// product actions
const getProducts = () => {
    return {
        type : GET_PRODUCTS,
    }
}

const addProduct = (product) => {
    return {
        type : ADD_PRODUCT,
        payload : product
    }
}

// cart actions
const getCartItems = () => {
    return {
        type : GET_CART_ITEMS,
    }
}

const addCartItem = (product) => {
    return {
        type : ADD_CART_ITEM,
        payload : product
    }
}

// product reducer
const productReducer = (state = initialProductsState, action) => {
    switch(action.type){
        case GET_PRODUCTS:
            return{
                ...state
            }
        
        case ADD_PRODUCT:
            return {
                ...state,
                products :[...state.products, action.payload],
                numOfProducts : state.numOfProducts + 1
            }
        
        default:
            return state
    }
}

// cart reducer
const cartReducer = (state = initialCartState, action) => {
    switch(action.type){
        case GET_CART_ITEMS:
            return{
                ...state
            }
        
        case ADD_CART_ITEM:
            return {
                ...state,
                cart :[...state.cart, action.payload],
                numOfProducts : state.numOfProducts + 1
            }
        
        default:
            return state
    }
}

const rootReducer = combineReducers({
    productR : productReducer,
    cartR : cartReducer
})

// const store = createStore(productReducer);
const store = createStore(rootReducer);
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(getCartItems());
store.dispatch(addCartItem("pen"));