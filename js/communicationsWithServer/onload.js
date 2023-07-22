let ItemsData;
let CategoryData;
totalRows = 0;
getItems();

async function getItems(rows = 20) {
    await apiCall("/api/Item/getAllLLCustomer", {
        method: "POST",

        body: JSON.stringify({
            "LazyLoadEvent": {
                "first": totalRows,
                "rows": rows
            }
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }, (data) => {
        ItemsData = data;
        dataItemDisplay();
    })
    totalRows+=rows;
    // fetch(url + "/api/Item/getAllLLCustomer", {
    //         method: "POST",

    //         body: JSON.stringify({

    //             "LazyLoadEvent": {
    //                 "first": 0,
    //                 "rows": 50
    //             }

    //         }),
    //         headers: {
    //             "Content-type": "application/json; charset=UTF-8"
    //         }
    //     })
    //     .then((response) => response.json())
    //     .then((json) => ItemsData = json)
    //     .finally(() => dataItemDisplay());
}

function makeItemsDiv(product) {
    let img = product.ItemImages[0] ? url + product.ItemImages[0].ItemImageFileName : "https://via.placeholder.com/550x750";

    return `
        <div class="col-xl-3 col-lg-4 col-md-4 col-12">
            <div class="single-product">
                <div class="product-img">
                    <a href="product?id=${product.ItemId}">
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
                            <a title="Add to cart" onclick="addToCart(${product.ItemId})">Add to cart</a>
                        </div>
                    </div>
                </div>
                <div class="product-content">
                    <h3><a href="product?id=${product.ItemId}">${product.ItemName}</a></h3>
                    <div class="product-price">
                        <span>${product.ItemNetSalePrice}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function dataItemDisplay() {

    if (ItemsData.status.code !== 0) {        return 0;
    }

    const dataDisplay = document.getElementById("dataDisplay");

    for (let index = 0; index < ItemsData.result.length; index++) {
        const item = ItemsData.result[index];
        dataDisplay.innerHTML += makeItemsDiv(item);
    }
}