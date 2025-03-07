/* JavaScript (script.js) */
let cart = [];

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", (event) => {
            const product = event.target.closest(".product");
            const name = product.getAttribute("data-name");
            const price = product.getAttribute("data-price");
            cart.push({ name, price });
            updateCart();
        });
    });
});

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price}`;
        cartItems.appendChild(li);
        total += parseFloat(item.price.substring(1));
    });
    document.getElementById("cart-total").textContent = `Total: $${total}`;
    document.getElementById("cart-count").textContent = cart.length;
}
