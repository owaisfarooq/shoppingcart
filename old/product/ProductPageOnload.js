const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const url = 'https://dummyjson.com/products/' + id;

async function getdata() {
    const response = await fetch(url);
    var product = await response.json();

    const tabContent = document.getElementById("tab-content");
    tabContent.innerHTML = `<div class="tab-pane active" id="pic-1"><img width="400" height="252" src="${product.images[0]}" /></div>`;
    for (let index = 0; index < product.images.length; index++) {
        const img = product.images[index];
        tabContent.innerHTML += `<div class="tab-pane" id="pic-${index+1}"><img src="${img}" /></div>`
    }

}
getdata();