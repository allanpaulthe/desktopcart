import { createStore, applyMiddleware } from 'redux';
import productsReducer from './reducers/productsReducer';
import logger from 'redux-logger';


const initial = {
    products: [],
    menuOn: false,
    quickView: false,
    quickSelected: 0,
    selectedMenuIcon:null
}

const store = createStore(productsReducer, initial, applyMiddleware(logger));

export default store;