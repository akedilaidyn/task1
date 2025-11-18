export const elements = {
  clientsList: document.querySelector(".clients-list"),
  burgerMenuBtn: document.querySelector(".burger-btn"),
  closeMenuBtn: document.querySelector(".close-btn"),
  sidebar: document.querySelector(".sidebar"),
  updatesForm: document.querySelector(".updates-form"),
  inputs: {
    name: document.querySelector("#name"),
    email: document.querySelector("#email"),
    consent: document.querySelector("#processing-checkbox"),
  },
  errors: {
    name: document.querySelector(".name-error"),
    email: document.querySelector(".email-error"),
    checked: document.querySelector(".checked-error"),
  },
  nav: {
    links: document.querySelectorAll(".nav-item a"),
    sidebarLinks: document.querySelectorAll(".sidebar-nav-link"),
    clients: document.querySelector("#nav-clients"),
    products: document.querySelector("#nav-products"),
    feedback: document.querySelector("#nav-feedback"),
  },
  currentYearEl: document.querySelector("#current-year"),
};
