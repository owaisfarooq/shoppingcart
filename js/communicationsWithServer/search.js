console.log("search js file loaded");

let searchResultsFromServer;
function searchStr() {

    const searchParameters = document.getElementById("searchParameters");
    
    fetch(url + "/api/Item/getAllLLCustomer", {
        method: "POST",

        body: JSON.stringify({
            "Where": {
                SearchString: searchParameters.value
            },
            "LazyLoadEvent": {
                "first": 0,
                "rows": 5
            }

        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => response.json())
    .then((json) => searchResultsFromServer = json)
    .then(() => console.log(searchResultsFromServer))
    .finally(() => showResults())

}
function showResults() {
    
    const list = document.getElementById("search-results-list");
    list.innerHTML = "";
    for (let index = 0; index < searchResultsFromServer.result.length; index++) {
        const element = searchResultsFromServer.result[index];
        list.innerHTML += `<button type="button" onclick="viewProduct('${element.ItemCode}')" class="list-group-item list-group-item-action">${element.ItemName}</button>`
        // += `<tr class="result" herf="/product?${element.ItemCode}"><td></td></tr>`;
    }
}