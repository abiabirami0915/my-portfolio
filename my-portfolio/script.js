// Get the menu button
let menuButton = document.getElementById("menu-btn");

// Get the navigation links
let navLinks = document.getElementById("nav-links");

// When the button is clicked
menuButton.onclick = function () {
    navLinks.classList.toggle("show");
};

// Close menu after clicking a link
let links = navLinks.querySelectorAll("a");

links.forEach(function (link) {
    link.onclick = function () {
        navLinks.classList.remove("show");
    };
});