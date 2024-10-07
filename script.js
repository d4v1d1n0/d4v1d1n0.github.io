const mobileMenuButton = document.getElementById("mobile-menu");
const navbarLinks = document.getElementById("navbar-links");

mobileMenuButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("menu-open");
});