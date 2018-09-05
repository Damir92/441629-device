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
