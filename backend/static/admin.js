// -----------------------------
// SAMPLE MENU DATA (temporary)
// -----------------------------
let menuItems = [
    { name: "Burger", price: 5.99, image: "/static/images/burger.jpg" },
    { name: "Pizza", price: 7.49, image: "/static/images/pizza.jpg" },
    { name: "Fries", price: 2.99, image: "/static/images/fries.jpg" }
];

// -----------------------------
// RENDER TABLE
// -----------------------------
function renderTable() {
    const tableBody = document.getElementById("menuTableBody");
    tableBody.innerHTML = "";

    menuItems.forEach((item, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.name}</td>
            <td>£${item.price}</td>
            <td><img src="${item.image}" class="menu-img"></td>
            <td>
                <button class="action-btn edit-btn" onclick="editItem(${index})">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteItem(${index})">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

renderTable();

// -----------------------------
// ADD NEW ITEM
// -----------------------------
document.getElementById("addForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const price = parseFloat(document.getElementById("price").value);
    const image = document.getElementById("image").value || "/static/images/default.jpg";

    menuItems.push({ name, price, image });

    renderTable();
    this.reset();
});

// -----------------------------
// DELETE ITEM
// -----------------------------
function deleteItem(index) {
    menuItems.splice(index, 1);
    renderTable();
}

// -----------------------------
// EDIT ITEM (simple version)
// -----------------------------
function editItem(index) {
    const newName = prompt("Enter new name:", menuItems[index].name);
    const newPrice = prompt("Enter new price:", menuItems[index].price);

    if (newName && newPrice) {
        menuItems[index].name = newName;
        menuItems[index].price = parseFloat(newPrice);
        renderTable();
    }
}
