const mobileBtn = document.querySelector(".mobile-btn");
const navBar = document.querySelector(".navbar");

mobileBtn.addEventListener("click", () => {
    navBar.classList.toggle("active");
    if (mobileBtn.children[0].classList.contains("fa-bars")) {
        mobileBtn.children[0].classList.remove("fa-bars");
        mobileBtn.children[0].classList.add("fa-xmark");
    } else {
        mobileBtn.children[0].classList.add("fa-bars");
        mobileBtn.children[0].classList.remove("fa-xmark");
    }
});

// -------------------- Auto-typing City Name --------------------
const autoCity = new Typed("#auto-city", {
    strings: ["India", "United Kingdom", "France", "Italy", "United State", "Russia"],
    typeSpeed: 200,
    backSpeed: 200,
    loop: true,
});
