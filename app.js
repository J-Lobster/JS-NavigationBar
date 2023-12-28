// classList - shows/gets all classes
// Methods: contains - checks classList for specific class | add - add class 
// remove - remove class | toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
//The commented if statement below is functionally the same as the code found on line 19.

//    if(links.classList.contains("show-links")) {
//        links.classList.remove("show-links");
//    }
//    else {
//        links.classList.add("show-links");
//    }

    links.classList.toggle("show-links");
});