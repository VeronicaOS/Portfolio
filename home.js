// HAMBURGER MENU

const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const navigation = document.querySelector(".navigation");
const links = document.querySelectorAll(".navigation a");

menuOpen.addEventListener("click", function () {
    navigation.style.display = "flex";
    menuOpen.classList.add("menu-hide");
    menuClose.classList.remove("menu-hide");
});

menuClose.addEventListener("click", function () {
    navigation.style.display = "none";
    menuClose.classList.add("menu-hide");
    menuOpen.classList.remove("menu-hide");
});

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navigation.style.display = "none";
        menuClose.classList.add("menu-hide");
        menuOpen.classList.remove("menu-hide");
    });
});
