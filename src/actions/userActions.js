export const setCart = (data) => {
    return {
        type: 'SET_CART',
        payload: data
    }
}

export const addCount = (id) => {
    return {
        type: 'ADD_COUNT',
        id: id
    }
}

export const removeCount = (id) => {
    return {
        type: 'REMOVE_COUNT',
        id: id
    }
}

export const deleteItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        id: id
    }
}

export const addToCart = (id) => {
    return {
        type: 'ADD_TO_CART',
        id: id
    }
}