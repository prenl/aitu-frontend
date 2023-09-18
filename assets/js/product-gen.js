products = [
  {
    brand: "Kawasaki",
    model: "Ninja",
    price: "16490.00",
    image: "https://i.pinimg.com/736x/85/2d/52/852d52396fb5d0c135284103ff51779b.jpg",
    availability: "In stock",
    options: ["400", "636", "1000"],
  },
  {
    brand: "Suzuki",
    model: "GSX-R",
    price: "7490.00",
    image: "https://i.pinimg.com/originals/d6/12/e4/d612e4187e31b6bcd2934b736d1026dc.jpg",
    availability: "Pre-order | Available in 2024",
    options: ["600", "750", "1000", "Hayabusa"],
  },
  {
    brand: "Yamaha",
    model: "R",
    price: "2754.41",
    image:
      "https://images.squarespace-cdn.com/content/v1/5909c09037c581454e2f9775/1599461032933-LCMTELRGEQ5MNWR9RC3Q/motorcyle_rider_portrait_photographer_melbourne-3.jpg",
    availability: "In stock | ex. R1",
    options: ["R125", "R3", "R6", "R1", "R1M"],
  },
  {
    brand: "Suzuki",
    model: "SV650",
    price: "7199.00",
    image: "https://5koleso.ru/wp-content/uploads/2020/03/kkk04748-1-1024x683.jpg",
    availability: "In stock",
    options: ["SV650", "SV650A", "SV650X"],
  },
  {
    brand: "Suzuki",
    model: "V-Strom",
    price: "8299.00",
    image: "https://ireland.apollo.olxcdn.com/v1/files/l5u62wqs5g0e3-PL/image;s=1813x1360",
    availability: "In stock",
    options: ["650", "1000"],
  },
  {
    brand: "Suzuki",
    model: "Boulevard",
    price: "12299.00",
    image:
      "https://c8.alamy.com/comp/PD5451/merida-yucmexico-feb-12-2017-suzuki-boulevard-m50-motorcycle-805cc-v-twin-engine-outdoor-PD5451.jpg",
    availability: "Out of stock",
    options: ["M50", "M90", "M109R"],
  },
  {
    brand: "Yamaha",
    model: "MT",
    price: "9999.00",
    image:
      "https://www.bennetts.co.uk/-/media/default-website/yamaha-mt-09-portrait.ashx?h=751&la=en&w=500&hash=A6D26A03F8CDB49003DECF66B646794F83AA4377",
    availability: "In stock",
    options: ["125", "300", "699", "900", "1000"],
  },
  {
    brand: "Yamaha",
    model: "FZ",
    price: "7999.00",
    image:
      "https://images.hindustantimes.com/auto/auto-images/bikes/yamaha/yamahafz25/exterior_yamaha-fz-25_front-right-side_600x400.jpg",
    availability: "In stock",
    options: ["FZ-07", "FZ-08", "FZ-09"],
  },
  {
    brand: "Kawasaki",
    model: "Z",
    price: "7999.00",
    image: "https://www.motorbeam.com/wp-content/uploads/2014-Kawasaki-Z1000-Handling.jpg",
    availability: "In stock",
    options: ["Z400", "Z650", "Z900", "Z1000"],
  },
  {
    brand: "Kawasaki",
    model: "Versys",
    price: "8299.00",
    image: "https://http2.mlstatic.com/D_NQ_NP_629655-MCO69890209134_062023-O.webp",
    availability: "In stock",
    options: ["650", "1000"],
  },
  {
    brand: "Kawasaki",
    model: "Vulcan",
    price: "12990.00",
    image: "https://www.seastarsuperbikes.co.uk/wp-content/uploads/2023/01/23MY_Vulcan-S_-GY1_ACT-9.001-1.jpg",
    availability: "In stock",
    options: ["400", "1000"],
  },
  {
    brand: "Honda",
    model: "CBR-R",
    price: "6899.00",
    image:
      "https://c4.wallpaperflare.com/wallpaper/319/543/773/cbr1000rr-honda-motorcycles-white-wallpaper-preview.jpg",
    availability: "In stock",
    options: ["300", "500", "650", "1000", "Fireblade"],
  },
  {
    brand: "Honda",
    model: "Rebel",
    price: "5999.00",
    image: "https://i.ebayimg.com/images/g/kqUAAOSwWDZhoIlC/s-l1200.jpg",
    availability: "In stock",
    options: ["300", "500", "1100"],
  },
];

function getURLParameter(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function generateProductHTML(product) {
  return `
  <div class="col-12 col-md-6 mb-5" style="font-family: 'Nunito';">
    <div class="d-flex bg-white product-card mx-auto">
        <div class="me-4 product-image">
            <img src="${product.image}" alt="${product.model}" class="w-100 h-100 object-fit-cover" loading="lazy" />
        </div>
        <form class="flex-fill ps-4">
            <div class="d-flex justify-content-between align-items-start">
                <h1 class="text-lg fw-semibold text-slate-900 mb-2 mt-3">
                    ${product.brand} ${product.model}
                </h1>
                <div class="fs-5 fw-bold mt-4" style="padding-right: 20px; color: #657786;">
                    from $${product.price}
                </div>
            </div>
            <div class="text-sm fw-medium text-slate-700 my-2">
                ${product.availability}
            </div>
            <div class="d-flex align-items-center my-4 pb-2">
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    ${product.options
                      .map(
                        (option) => `
                    <label class="btn btn-outline-secondary">
                    <input type="radio" name="size" value="${option}" autocomplete="off" required> ${option}&nbsp;
                    </label>
                    `
                      )
                      .join("")}
                </div>
            </div>
            <div class="d-flex align-items-center mb-4">
                <button class="btn btn-dark me-2" type="submit">
                Buy now
                </button>
                <button class="btn btn-outline-dark me-2" type="button">
                Add to bag
                </button>
                <button class="btn btn-outline-secondary" type="button" aria-label="Like" id="like">
                    <i class="fa-solid fa-heart" style=""></i>
                </button>
            </div>
            <p class="text-sm text-slate-700">
                Free shipping on all orders in Kazakhstan
            </p>
        </form>
    </div>
</div>
    `;
}

function parseBrands() {
  document.getElementById("products").innerHTML = "";
  const brand = getURLParameter("brand");

  if (brand) {
    const filteredProducts = products.filter((product) => product.brand === brand);

    if (filteredProducts.length < 1) {
      Swal.fire({
        title: "Not found",
        text: `Looks like we don't have any motorcycles from ${brand}`,
        icon: "error",
        confirmButtonText: "Got it!",
      }).then((result) => {
        window.location.replace(`http://127.0.0.1:65149/products.html`);
      });
    }

    document.getElementById("products").innerHTML = filteredProducts.map(generateProductHTML).join("");
  } else {
    document.getElementById("products").innerHTML = products.map(generateProductHTML).join("");
  }
}
