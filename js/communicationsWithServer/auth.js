<<<<<<< Updated upstream
=======
const storedToken = localStorage.getItem("token");
getCustomerProfile(storedToken);


function alertUser(returnedData) {
    // if (returnedData.status.code == 0) {
    //     showNotification(`Welcome back ${returnedData.result[0].CustomerFirstName}`, "alert-success");
    // } else {
    //     showNotification(`User not logged in`, "alert-warning");
    // }
}

async function getCustomerProfile(callBack) {
    console.log("storedToken: " + storedToken);
    
    
    await apiCall("/api/customer/getprofile", {
        method: "POST",
        body: JSON.stringify({
            "token": storedToken,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }, (data) => {
        
    })


}
>>>>>>> Stashed changes
