const urlParams = new URLSearchParams(window.location.search);
const categoryId = urlParams.get('categoryId');
let CategoryData;

getDataFromCategory(categoryId);

function getDataFromCategory(id) {
	apiCall("/api/Item/getAllLLCustomer", {
		method: "POST",
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		},
		body: JSON.stringify({
			"LazyLoadEvent": {
				"first": 0,
				"rows": 12
			},
			"Where": {
				"ItemItemClassId": id
			}
		})
	},
	(data) => {
		displayResult(data);
	});

}

async function populateCategories (categories) {
	const categoryTab = document.getElementById("categoryTab");
	
	categoryTab.innerHTML += `<ul class="categor-list">`;
	// const  = await getCategoryData().result;
	console.log(categories);
	console.log(categories);
	for (let index = 0; index < categories.length; index++) {
		if (categoryId == categories[index].ItemClassId) {
			for (let jindex = 0; jindex < categories[index].children.length; jindex++) {
				const category = categories[index].children[jindex];
				categoryTab.innerHTML += `<li><a href="shop-grid.html?categoryId=${category.ItemClassId}">${category.ItemClassName}</a></li>`;
			}
		}
	}
	categoryTab.innerHTML += `</ul>`;
}

function displayResult(data) {
	const rowDiv = document.getElementById("dataDisplayRow");
	let products = data.result;
	products.forEach(product => {
		rowDiv.innerHTML += makeCategoryResultDiv(product);
	});
}

function makeCategoryResultDiv(product) {
	let img = "https://via.placeholder.com/550x750";

	if (product.ItemImages[0]){
		img = url + '/' + product.ItemImages[0].ItemImageFileName;
	}
	return `
	<div class="col-lg-4 col-md-6 col-12">
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
						<a title="Add to cart" style="/*border: none;background: #e6e6e600;*/" onclick="addToCart(${product.ItemId})">Add to cart</a>
					</div>
				</div>
			</div>
			<div class="product-content">
				<h3><a href="product.html">${product.ItemName}</a></h3>
				<div class="product-price">
					<span>${product.ItemNetSalePrice}</span>
				</div>
			</div>
		</div>
	</div>`	
}
