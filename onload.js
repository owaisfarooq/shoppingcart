var data;
const url = 'https://fakestoreapi.com/products';
async function getdata() {
    const response = await fetch(url);
    data = await response.json();
    console.log(data);
    const list = document.getElementById("productList");
    let noOfCols = 4;
    for (let index = 0; index < data.length; index += noOfCols) {
        let lost = `<div class="row">`;
        for (let k = 0; k < noOfCols; k++) {
            lost += `
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img width="50px" height="150px" src="${data[k+index].image}"
                        class="card-img-top" alt="headphones">
                    <div class="card-body">
                        <h6 class="item-card-heading card-title">${data[k+index].title}</h6>
                        <a href="/product/?id=${data[k+index].id}" class="btn btn-primary">view More</a>
                    </div>
                </div>
            </div>
            `
        }
        lost += `</div>`;
        list.innerHTML += lost;
    }
}

async function carouselFill() {
    const banner = document.getElementById("banner");
    const product = data[Math.floor(Math.random() * 10)];
    banner.innerHTML = `
        <div class="container" style="height: 500px">
            <div class="row">
                <div class="col-sm-5" style="margin-top: auto;margin-bottom: auto;">
                    <h1>${product.title}</h1>
                    <p>${product.description}</p>
                    <a href="/product/?id=${product.id}" class="btn btn-primary">view More</a>
                </div>
                <div class="col-sm-7">
                    <img class="img-fluid" src="${product.image}" alt="product image">
                </div>
            </div>
        </div>
    `

}

getdata().then(() => carouselFill());