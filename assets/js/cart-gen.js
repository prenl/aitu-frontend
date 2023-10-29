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
            <img src="${product.image[0]}" class="img-fluid rounded-3" alt="Cotton T-shirt">
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

let products = [
    {
        id: 1,
        brand: "Kawasaki",
        model: "Ninja",
        price: "16490.00",
        image: [
            "https://images.pexels.com/photos/10392249/pexels-photo-10392249.jpeg?cs=srgb&dl=pexels-w-o-l-f-%CE%BB-r-t-10392249.jpg&fm=jpg",
            "https://images.unsplash.com/photo-1597497287565-a38cfaa4e762?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2F3YXNha2klMjBuaW5qYXxlbnwwfHwwfHx8MA%3D%3D",
        ],
        availability: "In stock",
        options: ["400", "636", "1000"],
    },
    {
        id: 2,
        brand: "Suzuki",
        model: "GSX-R",
        price: "7490.00",
        image: [
            "https://c8.alamy.com/comp/2JJT8MR/a-luxury-suzuki-gsxr-1000-superbike-on-a-track-2JJT8MR.jpg",
            "https://c8.alamy.com/comp/2JJT8MR/a-luxury-suzuki-gsxr-1000-superbike-on-a-track-2JJT8MR.jpg",
        ],
        availability: "Pre-order | Available in 2024",
        options: ["600", "750", "1000", "Hayabusa"],
    },
    {
        id: 3,
        brand: "Yamaha",
        model: "R",
        price: "2754.41",
        image: [
            "https://images.squarespace-cdn.com/content/v1/5909c09037c581454e2f9775/1599461032933-LCMTELRGEQ5MNWR9RC3Q/motorcyle_rider_portrait_photographer_melbourne-3.jpg",
            "https://images.squarespace-cdn.com/content/v1/5909c09037c581454e2f9775/1599461032933-LCMTELRGEQ5MNWR9RC3Q/motorcyle_rider_portrait_photographer_melbourne-3.jpg",
        ],
        availability: "In stock | ex. R1",
        options: ["R125", "R3", "R6", "R1", "R1M"],
    },
    {
        id: 4,
        brand: "Suzuki",
        model: "SV650",
        price: "7199.00",
        image: [
            "https://5koleso.ru/wp-content/uploads/2020/03/kkk04748-1-1024x683.jpg",
            "https://5koleso.ru/wp-content/uploads/2020/03/kkk04748-1-1024x683.jpg",
        ],
        availability: "In stock",
        options: ["SV650", "SV650A", "SV650X"],
    },
    {
        id: 5,
        brand: "Suzuki",
        model: "V-Strom",
        price: "8299.00",
        image: [
            "https://ireland.apollo.olxcdn.com/v1/files/l5u62wqs5g0e3-PL/image;s=1813x1360",
            "https://ireland.apollo.olxcdn.com/v1/files/l5u62wqs5g0e3-PL/image;s=1813x1360",
        ],
        availability: "In stock",
        options: ["650", "1000"],
    },
    {
        id: 6,
        brand: "Suzuki",
        model: "Boulevard",
        price: "12299.00",
        image: [
            "https://c8.alamy.com/comp/PD5451/merida-yucmexico-feb-12-2017-suzuki-boulevard-m50-motorcycle-805cc-v-twin-engine-outdoor-PD5451.jpg",
            "https://c8.alamy.com/comp/PD5451/merida-yucmexico-feb-12-2017-suzuki-boulevard-m50-motorcycle-805cc-v-twin-engine-outdoor-PD5451.jpg",
        ],
        availability: "Out of stock",
        options: ["M50", "M90", "M109R"],
    },
    {
        id: 7,
        brand: "Yamaha",
        model: "MT",
        price: "9999.00",
        image: [
            "https://www.bennetts.co.uk/-/media/default-website/yamaha-mt-09-portrait.ashx?h=751&la=en&w=500&hash=A6D26A03F8CDB49003DECF66B646794F83AA4377",
            "https://www.bennetts.co.uk/-/media/default-website/yamaha-mt-09-portrait.ashx?h=751&la=en&w=500&hash=A6D26A03F8CDB49003DECF66B646794F83AA4377",
        ],
        availability: "In stock",
        options: ["125", "300", "699", "900", "1000"],
    },
    {
        id: 8,
        brand: "Yamaha",
        model: "FZ",
        price: "7999.00",
        image: [
            "https://images.hindustantimes.com/auto/auto-images/bikes/yamaha/yamahafz25/exterior_yamaha-fz-25_front-right-side_600x400.jpg",
            "https://images.hindustantimes.com/auto/auto-images/bikes/yamaha/yamahafz25/exterior_yamaha-fz-25_front-right-side_600x400.jpg",
        ],
        availability: "In stock",
        options: ["FZ-07", "FZ-08", "FZ-09"],
    },
    {
        id: 9,
        brand: "Kawasaki",
        model: "Z",
        price: "7999.00",
        image: [
            "https://www.motorbeam.com/wp-content/uploads/2014-Kawasaki-Z1000-Handling.jpg",
            "https://www.motorbeam.com/wp-content/uploads/2014-Kawasaki-Z1000-Handling.jpg",
        ],
        availability: "In stock",
        options: ["Z400", "Z650", "Z900", "Z1000"],
    },
    {
        id: 10,
        brand: "Kawasaki",
        model: "Versys",
        price: "8299.00",
        image: [
            "https://http2.mlstatic.com/D_NQ_NP_629655-MCO69890209134_062023-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_629655-MCO69890209134_062023-O.webp",
        ],
        availability: "In stock",
        options: ["650", "1000"],
    },
    {
        id: 11,
        brand: "Kawasaki",
        model: "Vulcan",
        price: "12990.00",
        image: [
            "https://www.seastarsuperbikes.co.uk/wp-content/uploads/2023/01/23MY_Vulcan-S_-GY1_ACT-9.001-1.jpg",
            "https://www.seastarsuperbikes.co.uk/wp-content/uploads/2023/01/23MY_Vulcan-S_-GY1_ACT-9.001-1.jpg",
        ],
        availability: "In stock",
        options: ["400", "1000"],
    },
    {
        id: 12,
        brand: "Honda",
        model: "CBR-R",
        price: "6899.00",
        image: [
            "https://c4.wallpaperflare.com/wallpaper/319/543/773/cbr1000rr-honda-motorcycles-white-wallpaper-preview.jpg",
            "https://c4.wallpaperflare.com/wallpaper/319/543/773/cbr1000rr-honda-motorcycles-white-wallpaper-preview.jpg",
        ],
        availability: "In stock",
        options: ["300", "500", "650", "1000", "Fireblade"],
    },
    {
        id: 13,
        brand: "Honda",
        model: "Rebel",
        price: "5999.00",
        image: [
            "https://i.ebayimg.com/images/g/kqUAAOSwWDZhoIlC/s-l1200.jpg",
            "https://i.ebayimg.com/images/g/kqUAAOSwWDZhoIlC/s-l1200.jpg",
        ],
        availability: "In stock",
        options: ["300", "500", "1100"],
    },
];

function getCartTotalPrice(bag) {
    let total = 0;

    for (i = 0; i < bag.length; i++) {
        total += parseInt(products.find((product) => (product.id = bag[i])).price);
    }

    return total;
}

function registerCart() {
    Swal.fire({
        title: "Done!",
        text: "Your order has been sent!",
        icon: "success",
        confirmButtonText: "Ok",
    }).then(function (isConfirm) {
        if (isConfirm) window.location.href = "httpы://prenl.github.io/products";
    });
    localStorage.setItem("bag", JSON.stringify([]));
}

function parseCart() {
    let bag = JSON.parse(localStorage.getItem("bag"));
    let amount = bag.length;
    let cartTotal = getCartTotalPrice(bag);
    bag = Array.from(new Set(bag));
    document.getElementById("cart").innerHTML = bag.map(generateCartProduct).join("");
    document.getElementById("cart-items").innerHTML = "ITEMS " + amount;
    document.getElementById("howitems").innerHTML = amount + " items";
    document.getElementById("cart-total").innerHTML = "$" + cartTotal;
    document.getElementById("cart-total2").innerHTML = "$" + cartTotal;
}
