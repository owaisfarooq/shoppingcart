console.log("search js file loaded");

let searchResultsFromServer;
function searchStr() {

    const searchParameters = document.getElementById("searchParameters");
    
    apiCall("/api/Item/getAllLLCustomer", {
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
    }, (json) => {
        searchResultsFromServer = json
        console.log(searchResultsFromServer)
        showResults()
    })
}
function showResults() {
    
    const list = document.getElementById("search-results-list");
    list.innerHTML = "";
    for (let index = 0; index < searchResultsFromServer.result.length; index++) {
        const element = searchResultsFromServer.result[index];
        list.innerHTML += `<button type="button" onclick="viewProduct('${element.ItemId}')" class="list-group-item list-group-item-action">${element.ItemName}</button>`
    }
}

function hideResultsOnClickOutside(event) {
    const searchResultsContainer = document.querySelector(".search-results");
    const isClickInsideSearchContainer = searchResultsContainer.contains(event.target);

    if (!isClickInsideSearchContainer) {
        searchResultsContainer.style.display = "none";
    }
}

document.body.addEventListener("click", hideResultsOnClickOutside);

const searchInput = document.getElementById("searchParameters");
searchInput.addEventListener("click", function (event) {
    event.stopPropagation();
});

searchInput.addEventListener("focus", function () {
    const searchResultsContainer = document.querySelector(".search-results");
    searchResultsContainer.style.display = "block";
});