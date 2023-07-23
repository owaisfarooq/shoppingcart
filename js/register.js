<<<<<<< Updated upstream
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("number");
const pwd = document.getElementById("pwd");
const pwd2 = document.getElementById("cpwd");

=======
const loginPageUrlParams = new URLSearchParams(window.location.search);
const oldUrl = loginPageUrlParams.get('oldUrl') !== undefined ? loginPageUrlParams.get('oldUrl') : "index.html";
>>>>>>> Stashed changes

async function registerNewUser() {
    const firstName = document.getElementById("first_name");
    const lastName = document.getElementById("last_name");
    const email = document.getElementById("email");
    const phoneNumber = document.getElementById("number");
    const pwd = document.getElementById("pwd");
    const pwd2 = document.getElementById("cpwd");

    if (pwd.value !== pwd2.value) {
        alert("ARE YOU BLIND?")
        return "dumb";
    }
    await apiCall("/api/customer/signup", {
        method: "POST",

        body: JSON.stringify({
            CustomerFirstName: firstName.value,
            CustomerLastName: lastName.value,
            CustomerPhone1: phoneNumber.value,
            Email: email.value,
            Password: pwd.value
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }, (data) => {
        console.log("data: " + data);
    })
}
let token 
async function loginUser() {
<<<<<<< Updated upstream
    await apiCall("/api/customer/signin", {
=======
    const email = document.getElementById("email");
    const pwd = document.getElementById("pwd");
    
    await apiCall("/api/customer/login", {
>>>>>>> Stashed changes
        method: "POST",

        body: JSON.stringify({
            Email: email.value,
            Password: pwd.value
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }, (data) => {
<<<<<<< Updated upstream
        token = data.result[0].token;
        localStorage.setItem("token", token);
        const storedToken = localStorage.getItem("token");
        console.log(storedToken);
        console.log("data: " + data);
=======
        if (data.status.code == 0) {
            const token = data.result[0].token;
            localStorage.setItem("token", token);
            getCustomerProfile((profileData) => showNotification(`welcome back ${profileData.data[0].CustomerFirstName}!`, "alert-success"))
            if (oldUrl) {
                window.location.replace(oldUrl);
            }
        } else {
            showNotification(data.status.message, "alert-danger");
        }
>>>>>>> Stashed changes
    })
}