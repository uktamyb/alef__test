"use strict";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__items");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navItem = document.querySelectorAll(".nav__item");

navItem.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
