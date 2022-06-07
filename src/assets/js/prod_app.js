"use strict";

let date = new Date();
let year = date.getFullYear();
let outputCopyright = document.querySelector("#js__copyright");
outputCopyright.innerHTML = year;

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