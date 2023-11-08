function countProductOccurences(productId) {
    const bag = JSON.parse(localStorage.getItem("bag"));
    return bag.filter((id) => id === productId).length;
}

function addToBag(product_id) {
    if (!localStorage.getItem("bag")) {
        localStorage.setItem("bag", JSON.stringify([]));
    }

    let bag = JSON.parse(localStorage.getItem("bag"));
    bag.push(product_id);
    localStorage.setItem("bag", JSON.stringify(bag));
    parseCart();
}

function removeFromBag(productId) {
    let bag = JSON.parse(localStorage.getItem("bag"));
    const index = bag.indexOf(parseInt(productId));
    bag.splice(index, 1);
    localStorage.setItem("bag", JSON.stringify(bag));
    parseCart();
}

function generateCartProduct(productId) {
    let product;
    let products = JSON.parse(localStorage.getItem("products"));

    if (!products) {
        initProducts();
    }

    for (let i = 0; i < products.length; i++) {
        if (products[i].id === parseInt(productId)) {
            product = products[i];
            break;
        }
    }

    if (!product) return;

    let amount = countProductOccurences(product.id);

    return `<div class="row mb-4 d-flex justify-content-between align-items-center">
        <div class="col-md-2 col-lg-2 col-xl-2">
            <img src="${product.image[0]}" class="img-fluid rounded-3">
        </div>
        <div class="col-md-3 col-lg-3 col-xl-3">
            <h6 class="text-muted">${product.brand}</h6>
            <h6 class="text-black mb-0">${product.model}</h6>
        </div>
        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
            <button class="btn btn-link px-2" onclick="removeFromBag(${product.id})">
                <i class="fas fa-minus" aria-hidden="true"></i>
            </button>

            <input id="form1" min="0" name="quantity" value="${amount}" type="number" class="form-control form-control-sm">

            <button class="btn btn-link px-2" onclick="addToBag(${product.id})">
                <i class="fas fa-plus" aria-hidden="true"></i>
            </button>
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <h6 class="mb-0">$${product.price * amount}</h6>
        </div>
        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
            <a href="#!" class="text-muted"><i class="fas fa-times" aria-hidden="true"></i></a>
        </div>
    </div><hr class="my-4" />`;
}

function getCartTotalPrice(bag) {
    let products = JSON.parse(localStorage.getItem("products"));

    if (!products) {
        initProducts();
    }

    let total = 0;

    for (i = 0; i < bag.length; i++) {
        total += parseInt(products.find((product) => product.id == bag[i]).price);
    }

    return total;
}

function registerCart() {
    let bag = JSON.parse(localStorage.getItem("bag"));

    if (!bag || bag.length < 1) {
        Swal.fire({
            title: "Error!",
            text: "There is no any item in your bag",
            icon: "error",
            confirmButtonText: "Ok",
        });
        return;
    }

    Swal.fire({
        title: "Done!",
        text: "Your order has been sent!",
        icon: "success",
        confirmButtonText: "Ok",
    }).then(function (isConfirm) {});
    localStorage.setItem("bag", JSON.stringify([]));
}

function parseCart() {
    let bag = JSON.parse(localStorage.getItem("bag"));

    if (!bag) {
        return;
    }

    let amount = bag.length;
    let cartTotal = getCartTotalPrice(bag);
    bag = Array.from(new Set(bag));
    document.getElementById("cart").innerHTML = bag.map(generateCartProduct).join("");
    document.getElementById("cart-items").innerHTML = "ITEMS " + amount;
    document.getElementById("howitems").innerHTML = amount + " items";
    document.getElementById("cart-total").innerHTML = "$" + cartTotal;
    document.getElementById("cart-total2").innerHTML = "$" + cartTotal;
}
