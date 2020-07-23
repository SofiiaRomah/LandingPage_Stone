var image;

window.onload = function () {
  image = document.getElementById("clickAndChange");

  //   Immediately invoked function to set the theme on initial load
  (function () {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-dark");
      image.src = "images/dark.png";
      image.classList.add("invert-image");
    } else {
      setTheme("theme-light");
      image.src = "images/light.png";
      image.classList.remove("invert-image");
    }
  })();
};

window.onclick = function (event) {
  console.log(event);
  var navbar = document.getElementsByClassName("navbar")[0];
  var navMenu = document.getElementsByClassName("nav-menu")[0];
  var navHeight = navMenu.scrollHeight;
  if (navbar.classList.contains("toggled")) {
    navbar.classList.remove("toggled");
    if (navMenu.style.height == navHeight + "px") {
      navMenu.style.height = "0px";
    } else {
      navMenu.style.height = navHeight + "px";
    }
  }
};

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
    image.src = "images/light.png";
    image.classList.remove("invert-image");
  } else {
    setTheme("theme-dark");
    image.src = "images/dark.png";
    image.classList.add("invert-image");
  }
}

function toggleNavbar(event) {
  event.stopPropagation();
  var navbar = document.getElementsByClassName("navbar");
  navbar[0].classList.toggle("toggled");

  var navMenu = document.getElementsByClassName("nav-menu")[0];
  var navHeight = navMenu.scrollHeight;
  if (navMenu.style.height == navHeight + "px") {
    navMenu.style.height = "0px";
  } else {
    navMenu.style.height = navHeight + "px";
  }
}

function sendEmail(event) {
  var firstName, lastName, number, email, questions;
  firstName = document.getElementById("fname");
  lastName = document.getElementById("lname");
  email = document.getElementById("email");
  number = document.getElementById("number");
  questions = document.getElementById("questions");

  event.preventDefault();
  Email.send({
    UseDefaultCredentials: false,
    EnableSsl: true,
    SecureToken: "592b5828-e0b5-4197-8aaf-1b18c50064ba",
    To: "sofiiaromah@gmail.com",
    From: "sofiiaromah@gmail.com",
    Subject: "questions",
    Body: `First Name: ${firstName.value} <br /> Last Name: ${lastName.value} <br />
    Email: ${email.value} <br /> Phone Number: ${number.value} <br /> Question: ${questions.value}`,
  }).then((message) => console.log("mail sent successfully", message));

  firstName.value = "";
  lastName.value = "";
  email.value = "";
  number.value = "";
  questions.value = "";
}
