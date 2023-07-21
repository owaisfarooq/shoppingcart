const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("number");
const pwd = document.getElementById("pwd");
const pwd2 = document.getElementById("cpwd");


async function registerNewUser() {
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
    await apiCall("/api/customer/signin", {
        method: "POST",

        body: JSON.stringify({
            Email: email.value,
            Password: pwd.value
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }, (data) => {
        token = data.result[0].token;
        localStorage.setItem("token", token);
        const storedToken = localStorage.getItem("token");
        console.log(storedToken);
        console.log("data: " + data);
    })
}