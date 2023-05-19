//Slider
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  let x = document.getElementsByClassName("services__item_slider");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

// Set active menu-item
function setActive(el, list) {
  list.filter((item) => item === el)[0].classList.add("menu__link_active");
  list
    .filter((item) => item != el)
    .forEach((element) => element.classList.remove("menu__link_active"));
}

// Filter projects
const all = document.querySelector("#all");
const architecture = document.querySelector("#architecture");
const constuction = document.querySelector("#constuction");
const interior = document.querySelector("#interior");
const projects = [all, architecture, constuction, interior];
const projectCards = document.querySelectorAll(".project-last__card");

projects.forEach((element) => {
  element.addEventListener("click", () => {
    setActive(element, projects);
    element !== all
      ? projectCards.forEach((card) => {
          if (card.id === element.id) {
            card.classList.remove("card_hide");
          } else card.classList.add("card_hide");
        })
      : projectCards.forEach((card) => card.classList.remove("card_hide"));
  });
});

//Burger Menu
const burgerMenuButton = document.querySelector("#burger-button");
const navigationMenu = document.querySelector(".header__burger-menu");
const burgerLink = document.querySelectorAll(".menu__link_burger");

burgerMenuButton.addEventListener("click", () => {
  burgerMenuButton.classList.toggle("burger-icon_open");
  navigationMenu.classList.toggle("header__burger-menu_open");
});

burgerLink.forEach(function (link) {
  link.addEventListener("click", () => {
    burgerMenuButton.classList.toggle("burger-icon_open");
    navigationMenu.classList.toggle("header__burger-menu_open");
  });
});

//Modal Window
const modalButtons = document.querySelectorAll("#modal-button");
const modalWindow = document.querySelector(".page__modal");
const closeButton = document.querySelector("#close-button");
const submitForms = document.querySelectorAll("#submit");
submitForms.forEach(function (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.reset();
  });
});

modalButtons.forEach(function (button) {
  button.addEventListener("click", () => {
    modalWindow.style.display = "block";
  });
});

closeButton.addEventListener("click", () => {
  modalWindow.style.display = "none";
});
