
const API_BASE_URL = 'https://your-backend-api.onrender.com/api';

async function fetchProducts() {
    const res = await fetch(`${API_BASE_URL}/products`);
    const products = await res.json();
    console.log(products);
}
fetchProducts();
