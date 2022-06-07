"use strict";

let date = new Date();
let year = date.getFullYear();
let outputCopyright = document.querySelector("#js__copyright");
outputCopyright.innerHTML = year;

const scrollsDroite = document.querySelectorAll(".scroll--droite");
for (let scrollDroite of scrollsDroite) {
    scrollDroite.style.transform = "translate3d(-100px, 0, 0)";
}

const scrollsGauche = document.querySelectorAll(".scroll--gauche");
for (let scrollGauche of scrollsGauche) {
    scrollGauche.style.transform = "translate3d(100px, 0, 0)";
}

const scrollsHaut = document.querySelectorAll(".scroll--haut");
for (let scrollHaut of scrollsHaut) {
    scrollHaut.style.transform = "translate3d(0, 400px, 0)";
}

const scrolls = document.querySelectorAll(".scroll");
for (let scrollElem of scrolls) {
    scrollElem.style.opacity = "0";
}

gsap.registerPlugin("ScrollTrigger");

gsap.to("#scroll1", {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#scroll1",
        start: "center 120%",
        end: "center 50%",
        scrub: true,
    },
});

gsap.to("#scroll2", {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#scroll2",
        start: "center 120%",
        end: "center 50%",
        scrub: true,
    },
});

gsap.to("#scroll3", {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#scroll3",
        start: "center 120%",
        end: "center 50%",
        scrub: true,
    },
});

gsap.to("#scroll4", {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#scroll4",
        start: "center 120%",
        end: "center 50%",
        scrub: true,
    },
});

gsap.to("#scroll5", {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#scroll5",
        start: "center 120%",
        end: "center 80%",
        scrub: true,
    },
});