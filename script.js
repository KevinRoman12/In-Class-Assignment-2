const catBtn = document.getElementById("catBtn");
const dogBtn = document.getElementById("dogBtn");
const cowBtn = document.getElementById("cowBtn");

const hideCatBtn = document.getElementById("hideCatBtn");
const hideDogBtn = document.getElementById("hideDogBtn");
const hideCowBtn = document.getElementById("hideCowBtn");

const catImg = document.getElementById("catImg");
const dogImg = document.getElementById("dogImg");
const cowImg = document.getElementById("cowImg");

const resetBtn = document.getElementById("resetBtn");
const counter = document.getElementById("counter");

let animalsOnScreen = 0;
let catShowing = false;
let dogShowing = false;
let cowShowing = false;

function updateCounter() {
    counter.textContent = "Animals on screen: " + animalsOnScreen;
}

catBtn.addEventListener("click", function () {
    if (catShowing === false) {
        catImg.classList.remove("hidden");
        hideCatBtn.classList.remove("hidden");
        catBtn.classList.add("active");
        catShowing = true;
        animalsOnScreen++;
        updateCounter();
    }
});

hideCatBtn.addEventListener("click", function () {
    if (catShowing === true) {
        catImg.classList.add("hidden");
        hideCatBtn.classList.add("hidden");
        catBtn.classList.remove("active");
        catShowing = false;
        animalsOnScreen--;
        updateCounter();
    }
});

dogBtn.addEventListener("click", function () {
    if (dogShowing === false) {
        dogImg.classList.remove("hidden");
        hideDogBtn.classList.remove("hidden");
        dogBtn.classList.add("active");
        dogShowing = true;
        animalsOnScreen++;
        updateCounter();
    }
});

hideDogBtn.addEventListener("click", function () {
    if (dogShowing === true) {
        dogImg.classList.add("hidden");
        hideDogBtn.classList.add("hidden");
        dogBtn.classList.remove("active");
        dogShowing = false;
        animalsOnScreen--;
        updateCounter();
    }
});

cowBtn.addEventListener("click", function () {
    if (cowShowing === false) {
        cowImg.classList.remove("hidden");
        hideCowBtn.classList.remove("hidden");
        cowBtn.classList.add("active");
        cowShowing = true;
        animalsOnScreen++;
        updateCounter();
    }
});

hideCowBtn.addEventListener("click", function () {
    if (cowShowing === true) {
        cowImg.classList.add("hidden");
        hideCowBtn.classList.add("hidden");
        cowBtn.classList.remove("active");
        cowShowing = false;
        animalsOnScreen--;
        updateCounter();
    }
});

resetBtn.addEventListener("click", function () {
    catImg.classList.add("hidden");
    dogImg.classList.add("hidden");
    cowImg.classList.add("hidden");

    hideCatBtn.classList.add("hidden");
    hideDogBtn.classList.add("hidden");
    hideCowBtn.classList.add("hidden");

    catBtn.classList.remove("active");
    dogBtn.classList.remove("active");
    cowBtn.classList.remove("active");

    catShowing = false;
    dogShowing = false;
    cowShowing = false;

    animalsOnScreen = 0;
    updateCounter();
});