let productsURL = 'http://10.7.50.88:4000/homepage/products';
let cartURL = 'http://10.7.50.88:4000/user/cart';
let productDetailUrl = 'http://10.7.50.88:4000/product/details';
let reviewDetailUrl = 'http://10.7.50.88:4000/review';
let menuDetailURL = 'http://10.7.50.88:4000/menu/data';


export async function getProducts() {
    try {
        let response = await fetch(productsURL);
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {

    }
}

export async function getCart() {
    try {
        let response = await fetch(cartURL);
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {

    }
}

export async function getProductDetails(id) {
    try {
        var DetailUrl = productDetailUrl + '/' + id;
        let response = await fetch(DetailUrl);
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {

    }
}

export async function getReviewDetails(id) {
    try {
        var DetailUrl = reviewDetailUrl + '/' + id;
        let response = await fetch(DetailUrl);
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {

    }
}

export async function getMenuDetails() {
    try {
        let response = await fetch(menuDetailURL);
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {

    }
}
