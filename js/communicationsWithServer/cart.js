async function addToCart(id) {
    const storedToken = localStorage.getItem("token");   
    await apiCall("/api/cart/addtocart", {
        method: "POST",

        body: JSON.stringify({
            "token": storedToken,
            "ItemId": id
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }, (response) => {
        if (response.status.code == 0) {
            showNotification(`Item added successfully`, "alert-success");
            localStorage.setItem("cart", response.result[0]);
            updateCart(response.result[0]);
        } else {
            showNotification(response.status.message, "alert-danger");
        }
    })
}
updateCart()
async function updateCart() {
    const shoppingCartlist = document.getElementById("shopping-list");
    const totalProductsCart = document.getElementById("totalProductsCart");
    const totalProductsInCart = document.getElementById("totalProductsInCart");
    const totalPriceOfCart = document.getElementById("total");
    getCustomerCart((cart) => {
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
    const storedToken = localStorage.getItem("token");

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
        <a class="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#"></a>
        <h4><a href="#">${item.ItemName}</a></h4>
        <p class="quantity">1x - <span class="amount">${item.ItemCurSale}Rs</span></p>
    </li>
    `
}