console.log("headerFile Loaded");
let isShowing = false;
const headerDiv = document.getElementById("header");
if (headerDiv) {
    headerDiv.innerHTML = `
    <!-- Topbar -->
    <div class="topbar">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-12 col-12">
                    <!-- Top Left -->
                    <div class="top-left">
                        <ul class="list-main">
                            <li><i class="ti-headphone-alt"></i> +060 (800) 801-582</li>
                            <li><i class="ti-email"></i> support@shophub.com</li>
                        </ul>
                    </div>
                    <!--/ End Top Left -->
                </div>
                <div class="col-lg-8 col-md-12 col-12">
                    <!-- Top Right -->
                    <div class="right-content">
                        <ul class="list-main">
                            <li><i class="ti-location-pin"></i>Store location</li>
                            <li><i class="ti-user"></i> <a href="#">My account</a></li>
                            <li><i class="ti-power-off"></i><a href="login.html#">Login</a></li>
                        </ul>
                    </div>
                    <!-- End Top Right -->
                </div>
            </div>
        </div>
    </div>
    <!-- End Topbar -->
    <div class="middle-inner">
        <div class="container" style="max-width: 100%;">
            <div class="row" style="width: 100%;justify-content: space-around;">
                <div class="col-lg-2 col-md-2 col-12">
                    <!-- Logo -->
                    <div class="logo">
                        <a href="index.html"><img src="images/logo.png" alt="logo"></a>
                    </div>
                    <!--/ End Logo -->
                    <!-- Search Form -->
                    <div class="search-top">
                        <div class="top-search"><a href="#0"><i class="ti-search"></i></a></div>
                        <!-- Search Form -->
                        <div class="search-top">
                            <form class="search-form">
                                <!-- <input type="text" id="searchParameters" onchange="searchStr()" placeholder="Search here..." name="search">
                                <button value="search" type="submit"><i class="ti-search"></i></button> -->
                            </form>
                        </div>
                        <!--/ End Search Form -->
                    </div>
                    <!--/ End Search Form -->
                    <div class="mobile-nav"></div>
                </div>
                <!--<div class="nav-inner header-menu" id="header-menu">-->
                
                <div class="col-lg-5 col-md-7 col-12">
                    <div class="search-bar-top">
                        <div class="search-bar">                            
                            <div class="input_container">
                                <input name="search" class="awsome_input" id="searchParameters" onkeyup="searchStr()" placeholder="Search Products Here....." type="search" autocomplete="off">
                                <span class="awsome_input_border"></span>
                                <div class="search-results">
                                    <div id="search-results-list" class="list-group">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="btnn"><i class="ti-search"></i></button>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-12">
                    <div class="right-bar">
                        <!-- Search Form -->
                        <div class="sinlge-bar">
                            <a href="#" class="single-icon"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
                        </div>
                        <div class="sinlge-bar">
                            <a href="login.html?oldUrl=${encodeURIComponent(window.location.href)}" class="single-icon"><i  class="fa fa-user-circle-o" aria-hidden="true"></i></a>
                        </div>
                        <div class="sinlge-bar shopping">
                            <a href="cart.html"  class="single-icon"><i class="ti-bag"></i> <span id="totalProductsCart" class="total-count">0</span></a>
                            <!-- Shopping Item -->
                            <div class="shopping-item" id="shopping-item">
                                <div class="dropdown-cart-header">
                                    <span id="totalProductsInCart"></span>
                                    <a href="cart.html">View Cart</a>
                                </div>
                                <ul class="shopping-list" id="shopping-list">
<!--                                    <li>
                                        <a href="#" class="remove" title="Remove this item"><i class="fa fa-remove"></i></a>
                                        <a class="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#"></a>
                                        <h4><a href="#">Woman Ring</a></h4>
                                        <p class="quantity">1x - <span class="amount">$99.00</span></p>
                                    </li>
                                    <li>
                                        <a href="#" class="remove" title="Remove this item"><i class="fa fa-remove"></i></a>
                                        <a class="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#"></a>
                                        <h4><a href="#">Woman Necklace</a></h4>
                                        <p class="quantity">1x - <span class="amount">0 Rs</span></p>
                                    </li>-->
                                </ul>    
                                <div class="bottom">
                                    <div class="total">
                                        <span>Total</span>
                                        <span class="total-amount" id="total">00 Rs</span>
                                    </div>
                                    <a href="checkout.html" class="btn animate">Checkout</a>
                                </div>
                            </div>
                            <!--/ End Shopping Item -->
                        </div>
                    </div>
                </div>
                <div style="margin-top: auto;margin-bottom: auto;width: min-content;">
                    <div id="menuIcon" onclick="toggleCategories()">
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </div>
                </div>
                <!--
                    <div class="col-lg-2 col-md-7 col-12" id="allCategoriesMenu" style="margin-top: auto; width: min-content;margin-bottom: auto;height: 0px;overflow: hidden;"></div>
                        <div class="nav-inner header-menu" id="header-menu">
                        </div>    
                        <select class="form-select" id="allCategoriesSelect" aria-label="Default select example">
                            <option selected>All Categories</option>
                        </select>
                    </div>
                -->
            </div>
        </div>
    </div>
    <!-- Header Inner -->
    
    <div class="header-inner">
        <div class="container" style="width: 100%;max-width: 100%;">
            <div class="cat-nav-head">
                <div class="row" style="justify-content: center;/* display: block; */margin-left: auto;width: 100%;max-width: 100%;">
                    <div class="col-lg-9 col-12" style="padding-left: 0px;padding-right: 0px;">
                        <div class="menu-area">
                            <!-- Main Menu -->
                            <nav class="navbar navbar-expand-lg">
                                <div class="navbar-collapse">	
                                    <div class="nav-inner">	
                                        <ul class="nav main-menu menu navbar-nav" id="categories">
                                            <!--<li><a href="#">Shop<i class="ti-angle-down"></i></a>
                                                <ul class="dropdown">
                                                    <li><a href="shop-grid.html">Shop Grid</a></li>
                                                    <li><a href="cart.html">Cart</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Blog<i class="ti-angle-down"></i></a>
                                                <ul class="dropdown">
                                                    <li><a href="blog-single-sidebar.html">Blog Single Sidebar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            <!--/ End Main Menu -->	
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>







    <div class="header-inner asd">
        <div class="container">
            <div class="cat-nav-head">
                <div class="row" style="    justify-content: center;
                /* display: block; */
                margin-left: auto;
                width: 100%;">
                    <div class="col-lg-9 col-12" style="
                    padding-left: 0px;
                    padding-right: 0px;
                ">
                        <div class="menu-area">
                            <!-- Main Menu -->
                            <nav class="navbar navbar-expand-lg">
                                <div class="navbar-collapse">	
                                <!--<div class="nav-inner header-menu" id="header-menu">
                                    <ul class="nav main-menu menu navbar-nav" >
                                            <li><a href="#">Shop<i class="ti-angle-down"></i></a>
                                                <ul class="dropdown">
                                                    <li><a href="shop-grid.html">Shop Grid</a></li>
                                                    <li><a href="cart.html">Cart</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Blog<i class="ti-angle-down"></i></a>
                                                <ul class="dropdown">
                                                    <li><a href="blog-single-sidebar.html">Blog Single Sidebar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>-->
                                </div>
                            </nav>
                            <!--/ End Main Menu -->	
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--/ End Header Inner -->
`
}

getCategoryData()

const search = document.querySelector('[name="search"]');

search.addEventListener('keyup', (e) => {
    e.preventDefault()
    if (e.code === 'Enter') {
        console.log(search);
        // window.location.href = url + "/shop-grid.html?search=";
    }
});

async function getCategoryData() {
    apiCall("/api/ItemClass/getAllWithChildren", {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    },
    ( categoryData ) => {
        dataCategoriesDisplay(categoryData);
        if (categoryData){
            populateMenu(document.getElementById("header-menu"), categoryData.result);
            populateMenu(document.getElementById("allCategoriesSelect"), categoryData.result);    
        }

        // populateAllCategoriesSelect(data);

        if (window.location.href.includes("shop-grid.html")) {
            populateCategories(categoryData.result);
        }
        if (findWordInString(window.location.href, "index")) {
            displayBanners(categoryData)
        }

        return categoryData;
    });
}

function sortCategories(categoryData) {
    return categoryData.result.sort((a, b) => {
        const A = a.children.length;
        const B = b.children.length;
        return A < B ? 1 : A > B ? -1 : 0;
    });
}

function dataCategoriesDisplay( categoryData = sortCategories(categoryData) ) {

    const categoriesDiv = document.getElementById("categories");

    for (let index = 0; index < categoryData.result.length; index++) {
        const category = categoryData.result[index];
        categoriesDiv.innerHTML += makeCategoryDiv(category);
    }

    const dropdowns = document.querySelectorAll(".dropdown");

    for (const dropdown of dropdowns) {
        const childrenCount = dropdown.querySelectorAll("li").length;
        const columnCount = calculateColumnCount(childrenCount);

        dropdown.style.columnCount = columnCount;
    }

}

function calculateColumnCount(childrenCount) {
    const maxColumns = 6;
    const columnCount = Math.min(maxColumns, Math.ceil(childrenCount / 3));

    return columnCount;
}

function populateAllCategoriesSelect (data) {
    let result = data.result;
    
}

function makeCategoryDiv(category) {
    let div = `
        <li><a href="shop-grid.html?categoryId=${category.ItemClassId}">${category.ItemClassName}<i class="ti-angle-down"></i></a>
    `

    if (category.children) {

        div += `<ul class="dropdown">`
        for (let index = 0; index < category.children.length; index++) {
            const childCategory = category.children[index];
            div += `<li><a href="shop-grid.html?categoryId=${childCategory.ItemClassId}">${childCategory.ItemClassName}</a></li>`
        }
        div += `</ul>`
    }

    div += `</li>`
    return div;
}


function populateMenu(container, menu) {
    if (!menu || !menu.length) return;

    const ul = document.createElement("ul");

    for (const {
            ItemClassName,
            ItemClassLevel,
            children
        } of menu) {

        const li = document.createElement("li");
        li.textContent = ItemClassName;
        li.className = "leaf";

        if (children.length !== 0) {
            populateMenu(li, children);
            li.className = "collapsed";
            li.addEventListener("click", (e) => {
                if (e.target !== e.currentTarget) return;
                e.target.classList.toggle("expanded");
                e.target.classList.toggle("collapsed");
            });
        }
        ul.appendChild(li);
    }
    container.appendChild(ul);
}

// function logCategories(categories, indent = 0) {
// const headerMenu = document.getElementById("header-menu");
//     categories.forEach((category) => {
//         const {
//             ItemClassName,
//             ItemClassLevel,
//             children
//         } = category;
//         if (ItemClassLevel == 2) {
//             const list = document.createElement("li");
//         }
//         const spaces = " ".repeat(indent * 2);
//         console.log(spaces + ItemClassName);
//         if (children && children.length > 0) {
//             logCategories(children, indent + 1);
//         }
//     });
// }


function toggleCategories () {
    
    isShowing = isShowing ? false : true;
    const menuIcon = document.getElementById("menuIcon");
    const allCategoriesMenu = document.getElementById("allCategoriesMenu");
    menuIcon.classList.toggle("change");
    allCategoriesMenu.classList.toggle("fitContentHeight")
    
}