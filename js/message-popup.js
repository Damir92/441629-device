var link = document.querySelector(".write-us-link");

var popup = document.querySelector(".form-window");
var close = popup.querySelector(".button-close");

var form = popup.querySelector("form");
var yourname = popup.querySelector("#name");
var email = popup.querySelector("#email");
var message = popup.querySelector("#text");

var isStorageSupport = true;
var storage = "";

try {
  storageName = localStorage.getItem("yourname");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storageName) {
    yourname.value = storageName;

    if (storageEmail) {
      email.value = storageEmail;
      message.focus();
    } else {
      email.focus();
    }

  } else {
    yourname.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!yourname.value || !email.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("yourname", yourname.value);
      localStorage.setItem("email", email.value);
    }
  }
});
