const products = [

    {
        id: 1,
        name: "Wireless Headphones",
        price: 2499,
        originalPrice: 3499,
        discount: 29,
        description: "Comfortable wireless headphones with clear sound and deep bass.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        category: "Electronics",
        rating: 4.5,
        inStock: true
    },

    {
        id: 2,
        name: "Smart Watch",
        price: 1999,
        originalPrice: 2999,
        discount: 33,
        description: "A stylish smartwatch for fitness tracking and daily use.",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        category: "Accessories",
        rating: 4.2,
        inStock: true
    },

    {
        id: 3,
        name: "Running Shoes",
        price: 1799,
        originalPrice: 2499,
        discount: 28,
        description: "Lightweight running shoes designed for comfort and everyday workouts.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        category: "Footwear",
        rating: 4.4,
        inStock: true
    },

    {
        id: 4,
        name: "Travel Backpack",
        price: 1299,
        originalPrice: 1999,
        discount: 35,
        description: "A spacious backpack suitable for college, office, and travel.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        category: "Bags",
        rating: 4.3,
        inStock: true
    },

    {
        id: 5,
        name: "Digital Camera",
        price: 15999,
        originalPrice: 18999,
        discount: 16,
        description: "Capture memorable moments with a compact digital camera.",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
        category: "Electronics",
        rating: 4.6,
        inStock: true
    },

    {
        id: 6,
        name: "Sunglasses",
        price: 899,
        originalPrice: 1499,
        discount: 40,
        description: "Modern sunglasses with a stylish frame for everyday wear.",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
        category: "Fashion",
        rating: 4.1,
        inStock: true
    },

    {
        id: 7,
        name: "Coffee Maker",
        price: 3499,
        originalPrice: 4499,
        discount: 22,
        description: "Prepare fresh coffee at home with this easy-to-use coffee maker.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500",
        category: "Home Appliances",
        rating: 4.4,
        inStock: false
    }

];

const productContainer = document.getElementById("productContainer");

function displayProducts() {

    productContainer.innerHTML = "";

    products.forEach(function(product) {

        const productCard = document.createElement("div");

        productCard.className = "col-md-6 col-xl-4";

        productCard.innerHTML = `

            <div class="product-card">

                <img src="${product.image}"
                     alt="${product.name}"
                     class="product-image">

                <div class="product-details">

                    <span class="discount-badge">
                        ${product.discount}% OFF
                    </span>

                    <h5 class="mt-2">
                        ${product.name}
                    </h5>

                    <p class="product-description">
                        ${product.description}
                    </p>

                    <p>
                        <strong>Category:</strong>
                        ${product.category}
                    </p>

                    <div class="product-rating">
                        ★ ${product.rating}
                    </div>

                    <div class="mb-3">

                        <span class="product-price">
                            ₹${product.price.toLocaleString("en-IN")}
                        </span>

                        <span class="original-price">
                            ₹${product.originalPrice.toLocaleString("en-IN")}
                        </span>

                    </div>

                    <button
                        class="add-cart-btn"
                        ${!product.inStock ? "disabled" : ""}
                        onclick="addToCart(${product.id})">

                        ${product.inStock ? "Add to Cart" : "Out of Stock"}

                    </button>

                </div>

            </div>

        `;

        productContainer.appendChild(productCard);

    });

}

displayProducts();

let cart = [];

function addToCart(productId) {

    const product = products.find(p => p.id === productId);

    if (!product.inStock) {
        alert("Sorry! This product is out of stock.");
        return;
    }

    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {

        existingProduct.quantity++;
    } else {

        cart.push({
            ...product,
            quantity: 1
        });
    }

    renderCart();
}

function renderCart() {

    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");

    const totalQuantity = cart.reduce(
        (total, item) => total + item.quantity, 0
    );

    cartCount.textContent = totalQuantity;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" width="60">

            <div>
                <h6>${item.name}</h6>
                <p>Price: ₹${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
            </div>
        </div>
    `).join("");
}
renderCart();
