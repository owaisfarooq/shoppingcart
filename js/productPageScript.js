const urlParams = new URLSearchParams(window.location.search);
const productItemId = urlParams.get('id');
let product;
let data;
getData()

function getData() {
  apiCall("/api/Item/getById", {
    method: "POST",
    
    body: JSON.stringify({
      "id":  productItemId
      
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
  price.innerHTML = product.ItemNetSalePrice + " Rs";

  if (product.ItemDescription) {
    description.innerHTML = product.ItemDescription;
  }
}

function loadImage() {
  const imagesDiv = document.getElementById("images");
  if (product.ItemImages.ItemImageFileName) {
    const productImages = product.ItemImages;
    console.log(url + productImages[0].ItemImageFileName);
    imagesDiv.innerHTML = `<img class="active" src="${url + productImages[0].ItemImageFileName}" alt="">`
    for (let index = 1; index < productImages.length; index++) {
      const productImage = url+productImages[index].ItemImageFileName;
      imagesDiv.innerHTML += 
      `
        <img src="${productImage}" alt="">
      `
    }
  } else {
    imagesDiv.innerHTML = `
    <img src="images/red.png" class="active"/>
  `
  }
}

$(document).ready(function () {

  $('.color-choose input').on('click', function () {
    var headphonesColor = $(this).attr('data-image');

    $('.active').removeClass('active');
    $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
    $(this).addClass('active');
  });

});