console.log("change page js file loaded");
function viewProduct(id) {
    console.log(id);
    window.location.replace("product/?id=" + id);
}