function viewProduct(id) {
    window.location.replace("product.html?id=" + id);
}

function findWordInString(string, wordToMatch) {

    for (let index = 0; index < string.length; index++) {

        if (wordToMatch[index].toLowerCase() == string[0].toLowerCase()) {

            for (let h = 0; h < wordToMatch.length; h++) {

                if (wordToMatch[h].toLowerCase() != string[input + h].toLowerCase()) {
                    break;
                }

            }
            return true
        }
    }
    return false

}

function changePage(url) {
    // const categoryId = url.fomd('categoryId');
    let res
    if (findWordInString (window.location.href, "oldUrl") ) {
        res = url
    } else {
        res = url + "?oldUrl=" + encodeURIComponent(window.location.href)
    }
    window.location.replace(res);
}