populateAllCart();
let oldCart;
async function changeItemQty(itemId, qty) {
    let newValue = Number(oldCart.ItemCurSale) + Number(qty);

    for (let index = 0; index < oldCart.Detail.length; index++) {
        let oldCartId = oldCart.Detail[index].Item.ItemId
        if (oldCartId == itemId) {
            newValue = oldCart.Detail[index].CartDetailQTY + qty;
            break;
        }
    }

    await apiCall("/api/Cart/SetItemQTY", {
        method: "POST",
        body: JSON.stringify({
            "token": storedToken,
            "ItemId": itemId,
            "CartDetailQTY": newValue
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }, (data) => {
        if (data.status.code !== 0) {
            showNotification(data.status.message, "alert-danger");
            return 0;
        }
        const cartItemDisplayDiv = document.getElementById("cartItemDisplay");
        cartItemDisplayDiv.innerHTML = "";

        let cart = data.result[0];
        oldCart = cart;

        for (let index = 0; index < cart.Detail.length; index++) {
            const item = cart.Detail[index];
            cartItemDisplayDiv.innerHTML += makeItemDiv(item)
        }
    })
}


function populateAllCart() {
    const cartItemDisplayDiv = document.getElementById("cartItemDisplay");
    cartItemDisplayDiv.innerHTML = "";
    getCustomerCart((cart) => {
        oldCart = cart;
        for (let index = 0; index < cart.Detail.length; index++) {
            const item = cart.Detail[index];
            cartItemDisplayDiv.innerHTML += makeItemDiv(item)
        }
    });
}

function makeItemDiv(item) {

    let img = "https://via.placeholder.com/100x100";

    return `
        <tr>
            <td class="image" data-title="No"><img src="${img}" alt="#"></td>
            <td class="product-des" data-title="Description">
                <p class="product-name"><a href="product?id=${item.Item.ItemId}">${item.Item.ItemName}</a></p>
                <p class="product-des">${item.Item.ItemDescription}</p>
            </td>
            <td class="price" data-title="Price"><span>${item.CartDetailUnitCost} Rs</span></td>
            <td class="qty" data-title="Qty"><!-- Input Order -->
                <div class="input-group">
                    <div class="button minus">
                        <button type="button" class="btn btn-primary btn-number" onclick="changeItemQty(${item.Item.ItemId}, -1)">
                            <i class="ti-minus"></i>
                        </button>
                    </div>
                    <input type="text" class="input-number" value="${item.CartDetailQTY}">
                    <div class="button plus">
                        <button type="button" class="btn btn-primary btn-number" onclick="changeItemQty(${item.Item.ItemId}, 1)">
                            <i class="ti-plus"></i>
                        </button>
                    </div>
                </div>
                <!--/ End Input Order -->
            </td>
            <td class="total-amount" data-title="Total"><span>${item.CartDetailTotalAmount} Rs</span></td>
            <td class="action" data-title="Remove"><a href="#"><i class="ti-trash remove-icon"></i></a></td> 
        </tr>
    `
}