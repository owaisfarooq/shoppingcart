const urlParams = new URLSearchParams(window.location.search);
const categoryId = urlParams.get('categoryId');
let CategoryData;
console.log("shopGrid js file loaded");
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
function displayResult(data) {
	console.log(data);
	const rowDiv = document.getElementById("dataDisplayRow");
	let products = data.result;
	products.forEach(product => {
		rowDiv.innerHTML += makeCategoryResultDiv(product);
	});
}
function makeCategoryResultDiv(product) {
	let img = "https://via.placeholder.com/550x750";

	// if (product.ItemImages !== undefined) {
	// 	img = product.ItemImages[0]
	// }
	return `
	<div class="col-lg-4 col-md-6 col-12">
		<div class="single-product">
			<div class="product-img">
				<a href="/product?id=${product.ItemId}">
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
						<a title="Add to cart" href="addToCart(${product.ItemId})">Add to cart</a>
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
	</div>`	
}
