// Email

const email = document.querySelector("#email");
const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");
const error = document.querySelector(".error__text");
const btn = document.querySelector(".sub__btn");

let emailCode = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function check() {
  if (email.value.match(emailCode)) {
    email.style.borderColor = "#27ae60";
    icon1.style.display = "none";
    icon2.style.display = "block";
    error.style.display = "none";
  } else {
    email.style.borderColor = "#f79489";
    icon1.style.display = "block";
    icon2.style.display = "none";
    error.style.display = "block";
  }
}
