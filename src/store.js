import { createStore, applyMiddleware } from 'redux';
import productsReducer from './reducers/productsReducer';
import logger from 'redux-logger';


const initial = {
    products: [],
    userId: '',
    menuOn: false,
    quickView: false,
    quickSelected: null,
    selectedMenuIcon: null,
    cartCount: null,
    cart: { userid: [] },
    count: 1,
    loggedIn: false,
    userDetails: {}
}

const store = createStore(productsReducer, initial, applyMiddleware(logger));

export default store;