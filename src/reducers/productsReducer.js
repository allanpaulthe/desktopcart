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
        default:
            return state
    }
}

export default productsReducer;