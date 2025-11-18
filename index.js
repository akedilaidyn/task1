const CLIENTS_ENDPOINT = "https://rickandmortyapi.com/api/character";
const PRODUCTS_ENDPOINT = "https://fakestoreapi.com/products";
const FEEDBACK_ENDPOINT =
  "https://jsonplaceholder.typicode.com/comments?_limit=6";

const clientsList = document.querySelector(".clients-list");
const burgerMenuBtn = document.querySelector(".burger-btn");
const closeMenuBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

const updatesForm = document.querySelector(".updates-form");
const firstName = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const consentCheckbox = document.querySelector("#processing-checkbox");
const nameError = document.querySelector(".name-error");
const emailError = document.querySelector(".email-error");
const checkedError = document.querySelector(".checked-error");
const navLinks = document.querySelectorAll(".nav-item a");
const sidebarLinks = document.querySelectorAll(".sidebar-nav-link");
const clientsLink = document.querySelector("#nav-clients");
const productsLink = document.querySelector("#nav-products");
const feedbackLink = document.querySelector("#nav-feedback");
const currentYearEl = document.querySelector("#current-year");

let isMenuOpen = false;

function setActiveLink(activeLink) {
  navLinks.forEach((link) => {
    link.classList.remove("nav-item-active");
  });
  activeLink.classList.add("nav-item-active");
}

function setActiveSidebar(section) {
  sidebarLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.section === section);
  });
}

const sectionLinkMap = {
  clients: clientsLink,
  products: productsLink,
  feedback: feedbackLink,
};

function activateSection(section) {
  const activeLink = sectionLinkMap[section];
  if (activeLink) {
    setActiveLink(activeLink);
  }
  setActiveSidebar(section);
}

function showClients() {
  activateSection("clients");
  clientsList.innerHTML = "<h2>Loading...</h2>";

  fetch(CLIENTS_ENDPOINT)
    .then((res) => res.json())
    .then((data) => {
      const clients = data.results;
      let clientElements = "";
      clients.forEach((client) => {
        clientElements += `
          <li class='client-card'>
            <img src=${client.image} alt=${client.name} width='100' height='100' class='client-avatar' />
            <p class='client-name'>${client.name}</p>
          </li>
        `;
      });
      clientsList.innerHTML = clientElements;
    });
}

function showProducts() {
  activateSection("products");
  clientsList.innerHTML = "<h2>Loading...</h2>";

  fetch(PRODUCTS_ENDPOINT)
    .then((res) => res.json())
    .then((data) => {
      let productElements = "";
      data.forEach((product) => {
        productElements += `
          <li class='client-card'>
            <img src=${product.image} alt=${product.title} width='100' height='100' class='client-avatar' style="object-fit: contain;"/>
            <p class='client-name'>${product.title}</p>
          </li>
        `;
      });
      clientsList.innerHTML = productElements;
    });
}

function showFeedback() {
  activateSection("feedback");
  clientsList.innerHTML = "<h2>Loading...</h2>";

  fetch(FEEDBACK_ENDPOINT)
    .then((res) => res.json())
    .then((data) => {
      let feedbackElements = "";
      data.forEach((comment) => {
        feedbackElements += `
          <li class='client-card feedback'>
            <p>${comment.body}</p>
            <p class='client-name'>- ${comment.name}</p>
          </li>
        `;
      });
      clientsList.innerHTML = feedbackElements;
    });
}

burgerMenuBtn.addEventListener("click", () => {
  burgerMenuBtn.classList.toggle("hidden");
  sidebar.classList.toggle("show");
});
closeMenuBtn.addEventListener("click", () => {
  sidebar.classList.remove("show");
  burgerMenuBtn.classList.toggle("hidden");
});

clientsLink.addEventListener("click", (e) => {
  e.preventDefault();
  showClients();
});

productsLink.addEventListener("click", (e) => {
  e.preventDefault();
  showProducts();
});

feedbackLink.addEventListener("click", (e) => {
  e.preventDefault();
  showFeedback();
});

sidebarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const section = link.dataset.section;
    if (section === "clients") showClients();
    if (section === "products") showProducts();
    if (section === "feedback") showFeedback();
    sidebar.classList.remove("show");
    burgerMenuBtn.classList.remove("hidden");
  });
});

updatesForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = firstName.value;
  const email = emailInput.value;
  const isConsented = consentCheckbox.checked;

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (name === "") {
    nameError.textContent = "Please enter your first name";
  } else if (!isEmailValid) {
    emailError.textContent = "Please enter a valid email";
  } else if (!isConsented) {
    checkedError.textContent =
      "Please consent to the processing of personal data";
  } else {
    alert(`form submitted successfully! ${name} ${email}`);

    updatesForm.reset();
  }
});

showClients();

function updateFooterYear() {
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }
}

updateFooterYear();
