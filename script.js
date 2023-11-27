let cart = {};

const products = {
    product1: { name: "Mabook Pro 2022 13inch", price: 800000 },
    product2: { name: "HP Pavillion 15", price: 500000 },
    // Add more products as needed
};

function addToCart(productId) {
    if (!cart[productId]) {
        cart[productId] = 1;
    } else {
        cart[productId]++;
    }
    updateCart();
}

function removeFromCart(productId) {
    if (cart[productId] && cart[productId] > 0) {
        cart[productId]--;
    }
    updateCart();
}

function deleteItem(productId) {
    if (cart[productId]) {
        delete cart[productId];
        updateCart();
    }
}

function updateCart() {
    const cartList = document.getElementById("cartList");
    const totalQuantity = document.getElementById("totalQuantity");
    const totalPrice = document.getElementById("totalPrice");
    let total = 0;
    let price = 0;

    // Clear the cart list
    cartList.innerHTML = "";

    // Update the cart list
    for (const productId in cart) {
        const quantity = cart[productId];
        const product = products[productId];
        const listItem = document.createElement("li");
        listItem.textContent = `${product.name}, Quantity: ${quantity} `;
        
        // Add "+" button to increase quantity
        const plusButton = document.createElement("button");
        plusButton.textContent = "+";
        plusButton.onclick = function() {
            addToCart(productId);
        };
        listItem.appendChild(plusButton);

        // Add "-" button to decrease quantity
        const minusButton = document.createElement("button");
        minusButton.textContent = "-";
        minusButton.onclick = function() {
            removeFromCart(productId);
        };
        listItem.appendChild(minusButton);

        // Add "Delete" button to remove the item
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            deleteItem(productId);
        };
        listItem.appendChild(deleteButton);

        cartList.appendChild(listItem);

        // Calculate the total quantity and price
        total += quantity;
        price += quantity * product.price;
    }

    // Update the total quantity and price
    totalQuantity.textContent = total;
    totalPrice.textContent = `${price.toFixed(2)}`;
}

function likeProduct(productId) {
    // Add your like logic here
    alert(`You liked ${products[productId].name}`);
}
function likeProduct(productId) {
    const likeButton = document.querySelector(`#${productId} .like-button .heart`);
    
    // Toggle the "clicked" class to change the heart color
    likeButton.classList.toggle('clicked');
    
    // Your additional like logic can go here
}

function checkout() {
    // Add your checkout logic here
    alert("Checkout functionality will be implemented in the back-end.");
}
