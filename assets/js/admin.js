// Get a reference to the table body where you want to add rows
const tableBody = document.getElementById("productTableBody");

let products = JSON.parse(localStorage.getItem("products"));

if (!products) {
    initProducts();
}

products.forEach((product) => {
    const newRow = document.createElement("tr");

    // Create a custom checkbox column
    const checkboxColumn = document.createElement("td");
    checkboxColumn.innerHTML = `
        <span class="custom-checkbox">
            <input type="checkbox" id="checkbox${product.id}" name="options[]" value="${product.id}">
            <label for="checkbox${product.id}"></label>
        </span>`;
    newRow.appendChild(checkboxColumn);

    // Create columns for product information
    newRow.innerHTML += `
        <td>${product.brand}</td>
        <td>${product.model}</td>
        <td>${product.availability}</td>
        <td>${product.price}</td>
        <td>
            <button id="#editBike${product.id}" class="edit" type="button" data-adminproduct-id="${product.id}"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
            <button id="#deleteBike${product.id}" class="delete" type="button"  data-adminproduct-id="${product.id}"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
        </td>`;

    tableBody.appendChild(newRow);
});

document.addEventListener("DOMContentLoaded", function () {
    let allProducts = document.querySelectorAll("[data-adminproduct-id]");

    allProducts.forEach((button) => {
        button.addEventListener("click", function (event) {
            const productId = event.target.getAttribute("data-adminproduct-id");
            console.log(productId);

            let filteredProducts = [];

            for (let i = 0; i < products.length; i++) {
                if (products[i].id == productId) {
                    // console.log("neloh");
                } else {
                    filteredProducts.push(products[i]);
                    // console.log(products[i]);
                }
            }

            products = filteredProducts;

            localStorage.setItem("products", JSON.stringify(products));

            // window.location.href = "http://localhost:5500/admin";

            Swal.fire({
                title: "Success",
                text: `The motorcycle was deleted`,
                icon: "success",
                confirmButtonText: "Ok !",
            });
        });
    });
});
