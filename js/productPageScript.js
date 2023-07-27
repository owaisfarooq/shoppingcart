const urlParams = new URLSearchParams(window.location.search);
const productItemId = urlParams.get('id');
let product;
let data;

getData()

function getData() {
  apiCall("/api/Item/getById", {
    method: "POST",

    body: JSON.stringify({
      "id": productItemId

    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }, (json) => {
    data = json
    product = data.result[0]
    loadProduct()
  })
}

function loadProduct() {
  loadDescription()
  loadImage()
}

function loadDescription() {
  const name = document.getElementById("name");
  const category = document.getElementById("category");
  const description = document.getElementById("description");
  const price = document.getElementById("price");

  name.innerHTML = product.ItemName;
  // category.innerHTML = data..otherdata[0].ItemClassName;
  price.innerHTML = ` 
  <span>${product.ItemNetSalePrice} Rs</span>
  <!--<button onclick="addToCart(${product.ItemId})" class="cart-btn">Add to cart</button>-->`

  if (product.ItemDescription) {
    description.innerHTML = product.ItemDescription;
  }
}


function loadImage() {
  
  const imagesDiv = document.getElementById("thumbnail");
  const productImages = product.ItemImages;
  const main_product_image = document.getElementById("main_product_image");
  let img
  imagesDiv.innerHTML = "";
  
  if (product.ItemImages[0]) {
    main_product_image.src = url + encodeURIComponent(productImages[0].ItemImageFileName);
    img = url + encodeURIComponent(productImages[0].ItemImageFileName)
  } else {
    main_product_image.src = "https://via.placeholder.com/1200x900";
    img = "https://via.placeholder.com/1200x700"
  }
  
  for (let index = 0; index < 3; index++) {
    imagesDiv.innerHTML += `<img class="mx-3" onclick="changeImage(this)" src="${img}" width="70">`
  }
}

function changeImage(element) {

  var main_prodcut_image = document.getElementById('main_product_image');
  main_prodcut_image.src = element.src;
  

}