<<<<<<< Updated upstream
=======
// const cartData = localStorage.getItem("cart");
// const storedToken = localStorage.getItem("token");
>>>>>>> Stashed changes
async function addToCart(id) {
   
    await apiCall("/api/cart/addtocart", {
        method: "POST",

        body: JSON.stringify({
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJDdXN0b21lcklkIjo3ODk1LCJpYXQiOjE2ODIyODY2MTYsImV4cCI6MTk5NzY0NjYxNn0.Ed7nquespgVwfz94eqGUwPJvL_xck3NjckMPO5vxsuU",
            "ItemId": id
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }, (data) => {
        ItemsData = data;
        console.log("data: " + data);
        dataItemDisplay();
    })
<<<<<<< Updated upstream
=======
}
updateCart()
async function updateCart() {
    const shoppingCartlist = document.getElementById("shopping-list");
    const totalProductsCart = document.getElementById("totalProductsCart");
    const totalProductsInCart = document.getElementById("totalProductsInCart");
    const totalPriceOfCart = document.getElementById("total");
    getCustomerCart( (cart) => {
        totalPriceOfCart.innerHTML = cart.CartNetAmountTotal + " Rs";
        totalProductsInCart.innerHTML = cart.CartQTYTotal + " Items";
        totalProductsCart.innerHTML = cart.CartQTYTotal;
        shoppingCartlist.innerHTML = "";
        for (let index = cart.Detail.length-3; index < cart.Detail.length; index++) {
        
            const item = cart.Detail[index].Item;
            shoppingCartlist.innerHTML += makeCartDiv(item);
        }
    })
}

async function getCustomerCart(callback) {
    await apiCall("/api/cart/getCustomerCart", {
        method: "POST",
        body: JSON.stringify({
            "token": storedToken,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }, (data) => {
        callback(data.result[0])
    })        
}

function makeCartDiv(item) {
    return `
    <li>
        <a href="#" class="remove" title="Remove this item"><i class="fa fa-remove"></i></a>
        <a class="cart-img" href="product?id=${item.ItemId}"><img src="https://via.placeholder.com/70x70" alt="#"></a>
        <h4><a href="product?id=${item.ItemId}">${item.ItemName}</a></h4>
        <p class="quantity">1x - <span class="amount">${item.ItemCurSale}Rs</span></p>
    </li>
    `
>>>>>>> Stashed changes
}