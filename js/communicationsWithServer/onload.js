let data;
const url = "http://erpsystems2.ddns.net:6079";
console.log("js file loaded");

getData();

function getData() {
    fetch(url + "/api/Item/getAllLLCustomer", {
        method: "POST",
      
        body: JSON.stringify({
          
          "LazyLoadEvent": {"first": 0, "rows": 1000}
          
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => response.json())
    .then((json) => data = json)
    .finally(() => dataDisplay());          
}

function dataDisplay() {
    console.log(data);
    if (data.status.code !== 0) {
        console.log(detailError);
        return 0;
    }

    const dataDisplay = document.getElementById("dataDisplay");
    
    for (let index = 0; index < 50; index++) {
        const element = data.result[index];
        dataDisplay.innerHTML += makeDiv(element);
    }
}

function makeDiv(product) {
    let img = product.ItemImages[0] ? product.ItemImages[0] : "https://via.placeholder.com/550x750";
    
    return `
        <div class="col-xl-3 col-lg-4 col-md-4 col-12">
            <div class="single-product">
                <div class="product-img">
                    <a href="product-details.html">
                        <img class="default-img" src="${img}" alt="#">
                        <img class="hover-img" src="${img}" alt="#">
                    </a>
                    <div class="button-head">
                        <div class="product-action">
                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                            <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Add to Wishlist</span></a>
                            <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                        </div>
                        <div class="product-action-2">
                            <a title="Add to cart" href="#">Add to cart</a>
                        </div>
                    </div>
                </div>
                <div class="product-content">
                    <h3><a href="product-details.html">${product.ItemName}</a></h3>
                    <div class="product-price">
                        <span>${product.ItemNetSalePrice}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}