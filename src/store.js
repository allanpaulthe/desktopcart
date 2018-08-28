import { createStore, applyMiddleware } from 'redux';
import productsReducer from './reducers/productsReducer';
import logger from 'redux-logger';


const initial = {
    products: [],
    userId: '',
    menuOn: false,
    quickView: false,
    quickSelected: 0,
    selectedMenuIcon: null,
    cartCount: null,
    cart: { userid: [] },
    count: 1
}

const store = createStore(productsReducer, initial, applyMiddleware(logger));

export default store;