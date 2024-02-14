document.addEventListener("DOMContentLoaded", function() {
    let nav = document.querySelector(".zs--header__nav");
    let burger = document.querySelector(".zs--hamburger");
    let burgerFirstLine = document.querySelector(".zs--hamburger__line:nth-child(1)");
    let burgerSecondLine = document.querySelector(".zs--hamburger__line:nth-child(2)");
    let burgerThirdLine = document.querySelector(".zs--hamburger__line:nth-child(3)");

    burger.addEventListener("click", function () {
        burgerFirstLine.classList.toggle("zs--hamburger__line-1");
        burgerSecondLine.classList.toggle("zs--hamburger__line-2");
        burgerThirdLine.classList.toggle("zs--hamburger__line-3");

        nav.classList.toggle("zs--display__nav");
    });
});
