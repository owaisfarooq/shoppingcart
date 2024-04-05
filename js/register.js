const urlParams = new URLSearchParams(window.location.search);
const oldUrl = urlParams.get('oldUrl') !== undefined ? urlParams.get('oldUrl') : "index.html";
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementsByClassName('preloader');
    console.log(preloader);
});

async function registerNewUser() {
    const firstName = document.getElementById("first_name");
    const lastName = document.getElementById("last_name");
    const email = document.getElementById("email");
    const phoneNumber = document.getElementById("number");
    const pwd = document.getElementById("pwd");
    const pwd2 = document.getElementById("cpwd");

    if (pwd.value !== pwd2.value) {
        showNotification(`passwords do not match`, "alert-danger");
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
        if (data.status.code == 0) {
            showNotification(`User Registered!`, "alert-success");
            return 0;
        }
        showNotification(response.status.message, "alert-danger");
        })
}

async function loginUser() {
    const email = document.getElementById("email");
    const pwd = document.getElementById("pwd");
    
    await apiCall("/api/customer/login", {
        method: "POST",
        body: JSON.stringify({
            Email: email.value,
            Password: pwd.value
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }, (data) => {
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
    })
}