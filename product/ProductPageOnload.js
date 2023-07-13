const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const url = 'https://fakestoreapi.com/products/'+id;
console.log(window.location.href);
async function getdata() {
    const response = await fetch(url);
    var product = await response.json();
    
    const pic = document.getElementById("pic");
    const title = document.getElementById("title");
    const price = document.getElementById("price");
    const description = document.getElementById("description");

    description.innerHTML = product.description;
    price.innerHTML = product.price;
    title.innerHTML = product.title;
    pic.innerHTML = `<img src="${product.image}" />`
}
getdata();