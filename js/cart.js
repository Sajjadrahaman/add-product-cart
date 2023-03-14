const addProduct = () => {
    const productField = document.getElementById('productName');
    const quantityField = document.getElementById('productQuantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    displayProduct(product, quantity);
    addLocalStorageProduct(product, quantity);
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('productContainer');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);
}



/*--- get previous data from localStorage --- */
const getLocalStorageStoredCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart)
    }
    return cart;
}
/*--- add new data in localStorage ---*/
const addLocalStorageProduct = (product, quantity) => {
    const cart = getLocalStorageStoredCart();
    cart[product] = quantity;
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);
}

const displayAllLocalStorageProduct = () => {
    const savedCart = getLocalStorageStoredCart();
    for(const product in savedCart){
        const quantity = savedCart[product];
        displayProduct(product, quantity);
    }
}

displayAllLocalStorageProduct();