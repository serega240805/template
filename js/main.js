"use strict";

window.addEventListener("DOMContentLoaded", () => {
    // Burger

    const btn = document.querySelector('[data-burger="btn"]');
    const menu = document.querySelector('[data-burger="menu"]');
    const body = document.body;

    const burgerOpen = () => {
        btn.classList.toggle("burger--active");
        menu.classList.toggle("header__menu--active");
        body.classList.toggle("body--fixed");
    };

    const burgerClose = () => {
        btn.classList.remove("burger--active");
        menu.classList.remove("header__menu--active");
        body.classList.remove("body--fixed");
    };

    menu.addEventListener("click", (event) => {
        if (event.target && event.target.tagName === "A") {
            burgerClose();
        }
    });
    btn.addEventListener("click", burgerOpen);

    // Slider

    const advantages = new Swiper(".advantages__slider", {
        slidesPerView: 1,
        spaceBetween: 52,
        loop: true,
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: ".advantages__next",
            prevEl: ".advantages__prev",
        },
    });

    // Button
    
    let o = document.querySelector(".btn-up");
    window.addEventListener("scroll", () => {
        window.scrollY > 200
            ? o.classList.add("show")
            : o.classList.remove("show");
    }),
        o.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
});
