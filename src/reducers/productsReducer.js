import { writeToCart } from '../server/server';

const productsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ALL_PRODUCTS':
            return ({
                ...state,
                products: action.payload.data.products
            })
        case 'ON_QUICK_VIEW':
            return ({
                ...state,
                quickView: true,
                quickSelected: action.payload,
                menuOn: false
            })
        case 'CLOSE_QUICK_VIEW':
            return ({
                ...state,
                quickView: false
            })
        case 'MENU_TOGGLE':
            if (state.selectedMenuIcon === action.payload && state.menuOn === true) {
                return ({
                    ...state,
                    selectedMenuIcon: action.payload,
                    menuOn: false
                })
            }
            else {
                return ({
                    ...state,
                    selectedMenuIcon: action.payload,
                    menuOn: true
                })
            }
        case 'MENU_OFF':
            return ({
                ...state,
                menuOn: false
            })
        case 'MENU_ON_OFF':
            return ({
                ...state,
                menuOn: !state.menuOn
            })
        case 'SET_CART':
            return ({
                ...state,
                cart: action.payload,
                cartCount: action.payload.length
            })
        case 'SET_ADRESS':
            return ({
                ...state,
                userAdress: action.adress
            })
        case 'ADD_COUNT':
            var cart = [...state.cart]
            var newData = cart.map(el => {
                if (parseInt(el.id, 10) === parseInt(action.id, 10))
                    return Object.assign({}, el, { count: el.count + 1 })
                return el
            });
            writeToCart(newData);
            state = { ...state, cart: newData }
            return state;
        case 'REMOVE_COUNT':
            var cart = [...state.cart]
            var newData = cart.map(el => {
                if (parseInt(el.id, 10) === parseInt(action.id, 10))
                    if (el.count > 1)
                        return Object.assign({}, el, { count: el.count - 1 })
                    else
                        return el
                return el
            });
            writeToCart(newData);
            state = { ...state, cart: newData }
            return state;

        case 'DELETE_ITEM':
            var cart = [...state.cart];
            var length = [...state.cart].length - 1;
            var newData = cart.filter(element => element.id !== action.id);
            writeToCart(newData);
            return { ...state, cart: newData, cartCount: length };
        case 'ADD_TO_CART':
            let flag = 0;
            var cart = [...state.cart];
            var length = [...state.cart].length;
            var newData = cart.map(el => {
                if (el.id === action.id) {
                    flag = 1
                    return Object.assign({}, el, { count: el.count + 1 })
                }
                return el
            });
            if (flag === 0) {
                newData.push({ id: action.id, count: 1 })
                length += 1;
            }
            writeToCart(newData);
            return { ...state, cart: newData, cartCount: length };
        case 'LOGIN_GOOGLE':
            const username = action.data.w3.ig;
            const pic = action.data.w3.Paa;
            const userDetails = { username, pic };
            return ({
                ...state,
                loggedIn: true,
                userDetails: userDetails
            })
        case 'FACEBOOK_LOGIN':
            const user = action.data.name;
            const userpic = action.data.picture.data.url;
            const userDetail = { username: user, pic: userpic };
            return ({
                ...state,
                loggedIn: true,
                userDetails: userDetail
            })
        case 'USER_LOGOUT':
            return ({
                ...state,
                loggedIn: false,
                userDetails: {}
            })
        case 'SET_SUB_MENU':
            return ({
                ...state,
                subMenuList: action.data
            })
        default:
            return state
    }
}

export default productsReducer;