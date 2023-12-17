// HAMBURGER MENU

const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const navigation = document.querySelector(".navigation");
const links = document.querySelectorAll(".navigation a");

menuOpen.addEventListener("click", function () {
    navigation.classList.add("nav-open");
    menuOpen.classList.add("menu-hide");
    menuClose.classList.remove("menu-hide");
});

menuClose.addEventListener("click", function () {
    navigation.classList.remove("nav-open");
    menuClose.classList.add("menu-hide");
    menuOpen.classList.remove("menu-hide");
});

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navigation.classList.remove("nav-open");
        menuClose.classList.add("menu-hide");
        menuOpen.classList.remove("menu-hide");
    });
});
