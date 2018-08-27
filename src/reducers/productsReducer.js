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
                quickSelected: action.payload
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
        case 'SET_CART':
            return ({
                ...state,
                cart: action.payload.userid,
                cartCount: action.payload.userid.length
            })
        case 'ADD_COUNT':
            state = { ...state }
            var cart = state.cart;
            cart.forEach(element => {
                if (element.id === action.id) {
                    element.count += 1;
                }
            });
            state.cart =[{id:1,count:1},{id:2,count:6}]
            return state;
        case 'REMOVE_COUNT':
            state = { ...state };
            var cart = state.cart;
            cart.forEach(element => {
                if (element.id == action.id) {
                    element.count -= 1;
                }
            });
            return ({
                ...state,
                cart: cart
            })

        case 'DELETE_ITEM':
            state = { ...state };
            var cart = state.cart;
            cart.forEach(element => {
                if (element.id == action.id) {
                    var index = cart.indexOf(element);
                    cart.splice(index, 1)
                }
            });
            return { ...state, cart };
        default:
            return state
    }
}

export default productsReducer;