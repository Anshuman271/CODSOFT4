// script.js

document.addEventListener("DOMContentLoaded", function() {
    const categoriesData = [
        { name: "Nike", image: "https://imgs.search.brave.com/gLdvzqWSIa77zoo6a7Upzhuagu2tTsah3UW4EUtd86U/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E2LzRm/L2RjL2E2NGZkYzlk/NDc4YzgzODViZTRk/MDM4NDYzMmQyM2Jl/LmpwZw" },
        { name: "Adidas", image: "https://imgs.search.brave.com/6aOe_ZPQ5zdzgudSk-y0wbvcuEQmdT52TqMzki3Vgc4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC9QVlpMRXF1/LmpwZw" },
        { name: "Puma", image: "https://imgs.search.brave.com/oP4qANUJpxa3E-pehV-CbBfNh0_trUy7ZZE_iYEXZsw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmluZXByaW50YXJ0/LmNvbS9pbWFnZXMv/YmxvZy9wdW1hLWxv/Z28tcmVkdXgvcHVt/YS1sb2dvLmpwZw" },
        { name: "Men", image: "https://img.freepik.com/free-vector/hipster-logo-templates-collection_1319-20.jpg?size=626&ext=jpg" },
        { name: "Women", image: "https://img.freepik.com/free-vector/woman-hat-logo-vector-vintage-icon_126523-233.jpg?size=626&ext=jpg&ga=GA1.1.1511007606.1699505036&semt=ais" },
        { name: "Kids", image: "https://img.freepik.com/free-vector/kid-icons_23-2147515004.jpg?size=626&ext=jpg&ga=GA1.1.1511007606.1699505036&semt=ais" },
        { name: "Shirt", image: "https://img.freepik.com/free-vector/flat-design-clothing-logo-template_23-2149487965.jpg?size=626&ext=jpg&ga=GA1.1.1511007606.1699505036&semt=ais" },
        { name: "Shoe", image: "https://img.freepik.com/free-vector/hand-drawn-track-field-logo-template_23-2149196484.jpg?size=626&ext=jpg&ga=GA1.1.1511007606.1699505036&semt=ais" },
        { name: "Pants", image: "https://img.freepik.com/free-photo/man-wearing-brown-pants-close-up_53876-102239.jpg?size=626&ext=jpg&ga=GA1.1.1511007606.1699505036&semt=sph" },
        { name: "T-Shirt", image: "https://img.freepik.com/free-photo/white-t-shirts-with-copy-space-gray-background_53876-104920.jpg?size=626&ext=jpg&ga=GA1.1.1511007606.1699505036&semt=sph" },
        { name: "Running Shoes", image: "https://img.freepik.com/premium-photo/pair-shoes-with-sun-setting-them_963549-854.jpg?size=626&ext=jpg&ga=GA1.1.1511007606.1699505036&semt=ais" },
        { name: "Slim Fit Jeans", image: "https://img.freepik.com/free-photo/young-positive-woman-looking_171337-11952.jpg?size=626&ext=jpg&ga=GA1.1.1511007606.1699505036&semt=ais" },
    ];

    const bestsellersData = [
        { name: "Cool T-Shirt", image: "https://imgs.search.brave.com/U1GHOXV7HS0VJDGcsJondCE8sR8TDEmb5Fy1vJH1bGk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ybHYu/emNhY2hlLmNvbS8t/cl9yaGM4YV8xMzAu/anBn", description: "A stylish and comfortable t-shirt for any occasion.", price: "$19.99" },
        { name: "Running Shoes", image: "https://imgs.search.brave.com/f0z8HaA6wBAHgUe_giNpta_yJ9l9vEdusMQJBd7tYaw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzIxLzE2LzY1/LzM2MF9GXzEyMTE2/NjU1Ml84T2hSdENT/bWpiRXpYNnFNa0s4/alZlY1NHY3ZRZTBT/Yy5qcGc", description: "High-performance running shoes for your active lifestyle.", price: "$79.99" },
        { name: "Slim Fit Jeans", image: "https://imgs.search.brave.com/kC1V9ju5-Qy6Vgztb5ieclF7B5PbwR9oq7hBAnmqj0w/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zaG9w/ZHVlci5jb20vY2Ru/L3Nob3AvcHJvZHVj/dHMvTUZMUzMwMDIt/UGVyZm9ybWFuY2Ut/RGVuaW0tU2xpbS1I/ZXJpdGFnZS1SaW5z/ZV8xODAyLUZULmpw/Zz92PTE2NDc1NDMx/MjI", description: "Modern and trendy slim fit jeans for a fashionable look.", price: "$49.99" },
    ];

    const categoriesContainer = document.getElementById("categoriesContainer");
    const bestsellersContainer = document.getElementById("bestsellersContainer");

    populateCategories(categoriesData, categoriesContainer);
    populateBestsellers(bestsellersData, bestsellersContainer);
});

function populateCategories(categories, container) {
    categories.forEach(category => {
        const categoryElement = createCategoryElement(category);
        container.appendChild(categoryElement);
    });
}

function populateBestsellers(bestsellers, container) {
    bestsellers.forEach(product => {
        const productElement = createProductElement(product);
        container.appendChild(productElement);
    });
}

function createCategoryElement(category) {
    const categoryElement = document.createElement("div");
    categoryElement.classList.add("category");

    const imageElement = document.createElement("img");
    imageElement.src = category.image;
    imageElement.alt = category.name;

    const textElement = document.createElement("p");
    textElement.textContent = category.name;

    categoryElement.appendChild(imageElement);
    categoryElement.appendChild(textElement);

    return categoryElement;
}

function createProductElement(product) {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    const imageElement = document.createElement("img");
    imageElement.src = product.image;
    imageElement.alt = product.name;

    const textElement = document.createElement("p");
    textElement.textContent = product.description;

    const priceElement = document.createElement("div");
    priceElement.classList.add("price");
    priceElement.textContent = product.price;

    productElement.appendChild(imageElement);
    productElement.appendChild(textElement);
    productElement.appendChild(priceElement);

    return productElement;
}
