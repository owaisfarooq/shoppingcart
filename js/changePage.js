function viewProduct(id) {
    window.location.replace("product.html?id=" + id);
}

function changePage(url) {
    let res;
    if (findWordInString (window.location.href, "oldUrl") ) {
        res = url;
    } else {
        res = url + "?oldUrl=" + encodeURIComponent(window.location.href);
    }
    window.location.replace(res);
}