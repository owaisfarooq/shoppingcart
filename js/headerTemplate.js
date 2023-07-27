const headerDiv = document.getElementById("header");
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
        <div class="container">
            <div class="row">
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
                <div class="col-lg-8 col-md-7 col-12">
                    <div class="search-bar-top">
                        <div class="search-bar">
                            <select style="display:none">
                                <option selected="selected">All Category</option>
                                <option>watch</option>
                                <option>mobile</option>
                                <option>kid’s item</option>
                            </select>
                            <form>
                                <input name="search" id="searchParameters" onkeyup="searchStr()" placeholder="Search Products Here....." type="search" autocomplete="off">
                                    <div class="search-results">
                                        <div id="search-results-list" class="list-group">
                                        </div>
                                    </div>
                                <button class="btnn"><i class="ti-search"></i></button>
                            </form>
                        </div>
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
                                        <span class="total-amount" id="total">$134.00</span>
                                    </div>
                                    <a href="checkout.html" class="btn animate">Checkout</a>
                                </div>
                            </div>
                            <!--/ End Shopping Item -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Header Inner -->
    <div class="header-inner">
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
    <!--/ End Header Inner -->
`
getCategoryData()

function getCategoryData() {
    apiCall("/api/ItemClass/getAllWithChildren", {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    },
    (data) => {
        CategoryData = data;
        dataCategoriesDisplay();
        displayBanners(data)
        populateCategories(data.result);
        return data;
    });
}

function sortCategories() {
    CategoryData.result.sort((a, b) => {
        const A = a.children.length;
        const B = b.children.length;
        return A < B ? 1 : A > B ? -1 :  0;
    });
}

function dataCategoriesDisplay() {

    sortCategories()

    const categoriesDiv = document.getElementById("categories");

    for (let index = 0; index < CategoryData.result.length; index++) {
        const category = CategoryData.result[index];
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