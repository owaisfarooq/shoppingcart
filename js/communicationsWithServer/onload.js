let ItemsData;
let CategoryData;
totalRows = 0;
getItems();

// async function getTopSellingProducts() {
//     await apiCall("/api/Item/getTopSellingProducts", {
//         method: "POST",
//     }, (data) => {
//         if (data.status.code != 0) {
//             showNotification(data.status.message, "alert-danger")
//         }
//         displayTopSellingProducts(data.result)
//     })
// }

async function displayBanners(data) {
    const bannersDiv = document.getElementById("banners");

    for (let index = 0; index < 3; index++) {
        let category = data.result[index];
        bannersDiv.innerHTML += makeBannerDiv(category)
    }
}

function makeBannerDiv(category) {
    return `
        <div class="col-lg-4 col-12">
            <div class="single-banner tab-height">
                <img src="https://via.placeholder.com/600x370" alt="#">
                <div class="content">
                    <p>${category.ItemClassName}</p>
                    <a href="shop-grid.html?categoryId=${category.ItemClassId}">Discover Now</a>
                </div>
            </div>
        </div>
    `
}


async function getItems(rows = 20) {
    await apiCall("/api/Item/getTopSellingProducts", {
        method: "POST",

        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }, (data) => {
        ItemsData = data;
        dataItemDisplay();
    })
    totalRows += rows;
}

function displayTopSellingProducts(products) {

}

function makeItemsDiv(product) {
    let img = product.ItemImages[0] ? url + product.ItemImages[0].ItemImageFileName : "https://via.placeholder.com/550x750";
    let name = product.ItemName.substring(0, 20) + "...";

    return `
        <div class="col-xl-2 col-lg-4 col-md-4 col-4">
            <div class="single-product">
                <div class="product-img">
                    <a href="product.html?id=${product.ItemId}">
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
                    <h3><a href="product.html?id=${product.ItemId}">${name}</a></h3>
                    <div class="product-price">
                        <span>${product.ItemNetSalePrice}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function dataItemDisplay() {

    const dataDisplay = document.getElementById("dataDisplay");

    for (let index = 0; index < ItemsData.result.length; index++) {
        const item = ItemsData.result[index];
        dataDisplay.innerHTML += makeItemsDiv(item);
    }
}

populateCarousel()

async function populateCarousel() {
    await apiCall("/api/DynamicContentType/getCarouselImages", {method: "POST"}, (carousel) => {
        const carouselDiv = document.getElementById("carousel-inner")

        carouselDiv.innerHTML += makeCarouselDiv(url + carousel.result[1].DynamicContents[0].DynamicContentDiskPath + "/" + carousel.result[1].DynamicContents[0].DynamicContentSafeFileName, true);

        for (let indexForCarousel = 1; indexForCarousel < carousel.result[1].DynamicContents.length; indexForCarousel++) {
            carouselDiv.innerHTML += makeCarouselDiv(url + carousel.result[1].DynamicContents[indexForCarousel].DynamicContentDiskPath + "/" + carousel.result[1].DynamicContents[indexForCarousel].DynamicContentSafeFileName);
            
        }
    })
}

function makeCarouselDiv(image, isActive = false) {
    if (isActive) {
        return `
            <div class="carousel-item active">
            <img src=${image} class="d-block w-100" />
            </div>
        `
        
    }
    return `
        <div class="carousel-item">
        <img src=${image} class="d-block w-100" />
        </div>
    `
}
