let productsURL = 'http://10.7.50.88:4000/homepage/products';


export async function getProducts() {
    try {
        let response = await fetch(productsURL);
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}
