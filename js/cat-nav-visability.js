// const categoriesDiv = document.getElementById("categories");
// // categoriesDiv.style.opacity = 0;
// // categoriesDiv.style.visibility = 'hidden';

// function toggleVisibiltyOfCategoryDiv() {
//     categoriesDiv.classList.toggle('showCategories');
    

//     // if (categoriesDiv.style.opacity == 0) {
//     //     categoriesDiv.style.opacity = 1;
//     //     categoriesDiv.style.visibility = 'visible';
//     //     categoriesDiv.style.
//     //     opacity: 0;
//     // }
//     // } else {

//     //     categoriesDiv.style.opacity = 0;
//     //     categoriesDiv.style.visibility = 'hidden';
//     // }
// }
const categoriesDiv = document.getElementById("categories");
const catHeading = document.querySelector(".cat-heading");
let hideTimer; // Variable to store the timer for hiding the menu

// Function to show the menu when hovering over the h3 element
function showCategories() {
    clearTimeout(hideTimer); // Clear the timer to prevent hiding the menu
    categoriesDiv.classList.add('showCategories');
}

// Function to hide the menu when moving away from the h3 element or the menu itself
function hideCategories() {
    hideTimer = setTimeout(() => {
        categoriesDiv.classList.remove('showCategories');
    }, 200); // 200 milliseconds delay before hiding the menu
}

// Function to clear the timer and keep the menu visible when moving to the menu
function keepCategoriesVisible() {
    clearTimeout(hideTimer); // Clear the timer to prevent hiding the menu
}

// Add event listeners for mouseenter and mouseleave events on the h3 element
catHeading.addEventListener('mouseenter', showCategories);
catHeading.addEventListener('mouseleave', hideCategories);

// Add event listeners for mouseenter and mouseleave events on the menu
categoriesDiv.addEventListener('mouseenter', keepCategoriesVisible);
categoriesDiv.addEventListener('mouseleave', hideCategories);
