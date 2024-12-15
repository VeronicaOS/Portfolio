const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const navigation = document.querySelector(".navigation");
const links = document.querySelectorAll(".navigation a");
const sections = document.querySelectorAll(".section-a");
console.log("Observing sections:", sections);

// HAMBURGER MENU
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

// NAVIGATION SCROLL

links.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        navigation.classList.remove("nav-open");
        menuClose.classList.add("menu-hide");
        menuOpen.classList.remove("menu-hide");
    });
});

// SECTION REVEAL ON SCROLL

const objOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px",
};

const sectionObserver = new IntersectionObserver(callBackFunction, objOptions);

sections.forEach((section) => {
    sectionObserver.observe(section);
});

function callBackFunction(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
        } else {
            entry.target.classList.remove("section-visible");
        }
    });
}
