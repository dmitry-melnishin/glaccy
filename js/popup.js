
  var link = document.querySelector(".feedback");
  var popup = document.querySelector(".modal-content");
  var close = popup.querySelector(".modal-content-close");
  var login = popup.querySelector("[name=login]");
  var form = popup.querySelector("form");
  var email = popup.querySelector("[name=email]");
  var storage_login = localStorage.getItem("login");
  var storage_email = localStorage.getItem("email");
  var comment = popup.querySelector("[name=comment]");
  var overlay = document.querySelector(".modal-overlay");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Клик по ссылке обратной связи");
    popup.classList.add("modal-content-show");
    overlay.classList.add("modal-overlay-show");

    if (storage_login) {
      login.value = storage_login;
      email.focus();
    } else {
      login.focus();
    }
    if (storage_email) {
      email.value = storage_email;
      comment.focus();
    } else {
      email.focus();
    }
  });
  close.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Нажали на крестик");
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("modal-overlay-show");
    popup.classList.remove("modal-error");
  });
  form.addEventListener("submit", function(event) {
    if (!login.value || !email.value) {
      event.preventDefault();
      popup.classList.add("modal-error");
      console.log("Нужно ввести логин или пороль");
    } else {
      localStorage.setItem("login", login.value);
      localStorage.setItem("email", email.value);
    }
  });
  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal-content-show")) {
        popup.classList.remove("modal-content-show");
        overlay.classList.remove("modal-overlay-show");
        popup.classList.remove("modal-error");
        console.log("нажал Esc");
      }
    }
  });


  $(function(){
    $(".animated").on("mouseover", function(){
      $(this).addClass("rubberBand");
    }).on("mouseleave", function(){
      $(this).removeClass("rubberBand");
    })
  })
