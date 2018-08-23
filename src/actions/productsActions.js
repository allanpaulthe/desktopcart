export const setAllProducts = (data) => {
    return {
        type: 'SET_ALL_PRODUCTS',
        payload: data
    }
}

export const onQuickView = (id) => {
    return {
        type: 'ON_QUICK_VIEW',
        payload: id
    }
}

export const closeQuickView = () => {
    return {
        type: 'CLOSE_QUICK_VIEW',
        payload: 0
    }
}

export const toggleMenuView = (id) => {
    return {
        type: 'TOGGLE_MENU_VIEW',
        payload: 0
    }
}

export const menuToggle = (id) => {
    return {
        type: 'MENU_TOGGLE',
        payload: id
    }
}