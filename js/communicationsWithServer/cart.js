const cartData = localStorage.getItem("cart");

async function addToCart(id) {
   
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

function updateCart(cart) {
    const shoppingCartlist = document.getElementById("shopping-list");
    // shoppingCartDiv.innerHTML = "";
    for (let index = 0; index < cart.Detail.length; index++) {
        const item = cart.Detail[index].Item;
        shoppingCartlist.innerHTML += makeCartDiv(item);
    }
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