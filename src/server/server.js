const productsURL = 'http://10.7.50.88:4000/homepage/products';
const cartURL = 'http://10.7.50.88:4000/user/cart';
const productDetailUrl = 'http://10.7.50.88:4000/product/details';
const reviewDetailUrl = 'http://10.7.50.88:4000/review';
const menuDetailURL = 'http://10.7.50.88:4000/menu/data';
const oneMenuDetailURL = 'http://10.7.50.88:4000/menu/data/';


export async function getProducts() {
    try {
        const response = await fetch(productsURL);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {

    }
}

export async function getCart() {
    try {
        const response = await fetch(cartURL);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {

    }
}

export async function getProductDetails(id) {
    try {
        var DetailUrl = productDetailUrl + '/' + id;
        const response = await fetch(DetailUrl);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {

    }
}

export async function getReviewDetails(id) {
    try {
        var DetailUrl = reviewDetailUrl + '/' + id;
        const response = await fetch(DetailUrl);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {

    }
}

export async function getMenuDetails() {
    try {
        const response = await fetch(menuDetailURL);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {

    }
}

export async function getOneMenuDetails(main) {
    try {
        const response = await fetch(oneMenuDetailURL + main);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {

    }
}

export async function writeToCart(cart) {
    try {
        const response = await fetch('http://10.7.50.88:4000/insertIntoCart', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'data': JSON.stringify(cart)
            }
        });
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
     
    }
}
