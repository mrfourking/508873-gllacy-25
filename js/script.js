var feedbackButton = document.querySelector(".feedback-button");
var popup = document.querySelector(".modal-feedback");
var sliderButton = document.getElementsByName("slider-btn");
var slides = document.querySelectorAll(".slide");

var closeButton = popup.querySelector(".close-button");
var form = popup.querySelector("form");
var userName = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("userName");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storageName && storageEmail) {
    userName.value = storageName;
    email.value = storageEmail;
  }
});

closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

form.addEventListener("submit", function (evt) {

  if (!userName.value || !email.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("email", email.value);
    }
  }
});

sliderButton[0].addEventListener("click", function () {
  slides[0].classList.add("slide-show");
  slides[1].classList.remove("slide-show");
  slides[2].classList.remove("slide-show");
});

sliderButton[1].addEventListener("click", function () {
  slides[1].classList.add("slide-show");
  slides[0].classList.remove("slide-show");
  slides[2].classList.remove("slide-show");
});

sliderButton[2].addEventListener("click", function () {
  slides[2].classList.add("slide-show");
  slides[1].classList.remove("slide-show");
  slides[0].classList.remove("slide-show");
});



