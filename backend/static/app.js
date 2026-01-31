// -----------------------------
// SAMPLE MENU DATA (frontend only)
// -----------------------------
const menuItems = [
    { name: "Burger", price: 5.99, image: "/static/images/burger.jpg" },
    { name: "Pizza", price: 7.49, image: "/static/images/pizza.jpg" },
    { name: "Fries", price: 2.99, image: "/static/images/fries.jpg" }
];

// -----------------------------
// DISPLAY MENU ITEMS
// -----------------------------
const menuContainer = document.getElementById("menu-container");

menuItems.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    card.innerHTML = `
        <img src="${item.image}" class="menu-img">
        <h3>${item.name}</h3>
        <p>£${item.price}</p>
        <button onclick="addToBasket('${item.name}', ${item.price})">Add</button>
    `;

    menuContainer.appendChild(card);
});

// -----------------------------
// BASKET LOGIC
// -----------------------------
let basket = [];

function addToBasket(name, price) {
    basket.push({ name, price });

    const basketList = document.getElementById("basket-list");
    const li = document.createElement("li");
    li.textContent = `${name} - £${price}`;
    basketList.appendChild(li);
}

// -----------------------------
// CHECKOUT BUTTON
// -----------------------------
document.getElementById("checkout-btn").addEventListener("click", () => {
    alert("Continue to checkout process.");
});
