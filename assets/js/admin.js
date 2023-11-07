// Get a reference to the table body where you want to add rows
const tableBody = document.getElementById("productTableBody");

// Iterate through the products array and create rows
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
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
        </td>`;

    // Append the new row to the table
    tableBody.appendChild(newRow);
});
