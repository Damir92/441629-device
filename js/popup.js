var link = document.querySelector(".write-us-link");

var popup = document.querySelector(".form-window");
var close = popup.querySelector(".button-close");

var form = popup.querySelector("form");
var yourName = popup.querySelector("#name");
var email = popup.querySelector("#email");
var message = popup.querySelector("#text");

var isStorageSupport = true;
var storage = "";


var mapLink = document.querySelector(".about-map");

var mapPopup = document.querySelector(".map-window");
var mapClose = mapPopup.querySelector(".button-close");

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.687128, 37.529821],
    zoom: 16
  });

  var myPlacemark = new ymaps.Placemark([55.687128, 37.529821], {
    hintContent: "Мы находимся здесь",
    balloonContent: "улица Строителей, 15"
  }, {
    iconLayout: "default#image",
    iconImageHref: "img/google_maps_pin.svg",
    iconImageSize: [50, 40]
  });

  myMap.geoObjects.add(myPlacemark);
}

try {
  storageName = localStorage.getItem("yourName");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storageName) {
    yourName.value = storageName;

    if (storageEmail) {
      email.value = storageEmail;
      message.focus();
    } else {
      email.focus();
    }

  } else {
    yourName.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!yourName.value || !email.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("yourName", yourName.value);
      localStorage.setItem("email", email.value);
    }
  }
});



window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});

var slidesToggle = document.querySelectorAll(".slider-toggle");
var slides = document.querySelectorAll(".slide");
var servicesToggle = document.querySelectorAll(".services-toggle");
var services = document.querySelectorAll(".services-item");
var currentSlide = 0;
var currentService = 0;

slidesToggle[0].addEventListener("click", function(evt) {
  if (!slidesToggle[0].classList.contains("slider-toggle-active")) {
    evt.preventDefault();
    slidesToggle[currentSlide].classList.remove("slider-toggle-active");
    slides[currentSlide].classList.remove("slide-active");
    currentSlide = 0;
    slidesToggle[currentSlide].classList.add("slider-toggle-active");
    slides[currentSlide].classList.add("slide-active");
  }
});

slidesToggle[1].addEventListener("click", function(evt) {
  if (!slidesToggle[1].classList.contains("slider-toggle-active")) {
    evt.preventDefault();
    slidesToggle[currentSlide].classList.remove("slider-toggle-active");
    slides[currentSlide].classList.remove("slide-active");
    currentSlide = 1;
    slidesToggle[currentSlide].classList.add("slider-toggle-active");
    slides[currentSlide].classList.add("slide-active");
  }
});

slidesToggle[2].addEventListener("click", function(evt) {
  if (!slidesToggle[2].classList.contains("slider-toggle-active")) {
    evt.preventDefault();
    slidesToggle[currentSlide].classList.remove("slider-toggle-active");
    slides[currentSlide].classList.remove("slide-active");
    currentSlide = 2;
    slidesToggle[currentSlide].classList.add("slider-toggle-active");
    slides[currentSlide].classList.add("slide-active");
  }
});

servicesToggle[0].addEventListener("click", function(evt) {
  if (!servicesToggle[0].classList.contains("services-toggle-active")) {
    evt.preventDefault();
    servicesToggle[currentService].classList.remove("services-toggle-active");
    services[currentService].classList.remove("services-item-active");
    currentService = 0;
    servicesToggle[currentService].classList.add("services-toggle-active");
    services[currentService].classList.add("services-item-active");
  }
});

servicesToggle[1].addEventListener("click", function(evt) {
  if (!servicesToggle[1].classList.contains("services-toggle-active")) {
    evt.preventDefault();
    servicesToggle[currentService].classList.remove("services-toggle-active");
    services[currentService].classList.remove("services-item-active");
    currentService = 1;
    servicesToggle[currentService].classList.add("services-toggle-active");
    services[currentService].classList.add("services-item-active");
  }
});

servicesToggle[2].addEventListener("click", function(evt) {
  if (!servicesToggle[2].classList.contains("services-toggle-active")) {
    evt.preventDefault();
    servicesToggle[currentService].classList.remove("services-toggle-active");
    services[currentService].classList.remove("services-item-active");
    currentService = 2;
    servicesToggle[currentService].classList.add("services-toggle-active");
    services[currentService].classList.add("services-item-active");
  }
});
