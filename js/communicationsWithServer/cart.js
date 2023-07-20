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
}