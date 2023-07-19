const url = "http://erpsystems2.ddns.net:6079";
const urlParams = new URLSearchParams(window.location.search);
const productItemCode = urlParams.get('id');
let product;
let data;
getData()

function getData() {
  fetch(url + "/api/Item/getAllLLCustomer", {
      method: "POST",

      body: JSON.stringify({
        "Where": {
          ItemCode: productItemCode
        }
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then((response) => response.json())
    .then((json) => data = json)
    .then(() => product = data.result[0])
    .then(() => console.log(data))
    .finally(() => loadProduct())

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
  category.innerHTML = data.status.otherdata[0].ItemClassName;
  price.innerHTML = product.ItemCurSale + " Rs";

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
    <img data-image="black" src="images/black.png" alt="">
    <img data-image="blue" src="images/blue.png" alt="">
    <img data-image="red" class="active" src="images/red.png" alt="">
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