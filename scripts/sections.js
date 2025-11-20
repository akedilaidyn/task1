import { elements } from "./dom.js";
import { ENDPOINTS } from "./api.js";

function setSectionActive(sectionName) {
  elements.nav.links.forEach((link) =>
    link.classList.remove("nav-item-active")
  );
  const activeNav = elements.nav[sectionName];
  if (activeNav) activeNav.classList.add("nav-item-active");

  elements.nav.sidebarLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.section === sectionName);
  });
}

export function showClients() {
  setSectionActive("clients");
  elements.clientsList.innerHTML = "<h2>Loading...</h2>";

  fetch(ENDPOINTS.CLIENTS)
    .then((res) => res.json())
    .then((data) => {
      const html = data.results
        .map(
          (client) => `
        <li class='client-card'>
          <img src=${client.image} alt=${client.name} width='100' height='100' class='client-avatar' />
          <p class='client-name'>${client.name}</p>
        </li>
      `
        )
        .join("");
      elements.clientsList.innerHTML = html;
    });
}

export function showProducts() {
  setSectionActive("products");
  elements.clientsList.innerHTML = "<h2>Loading...</h2>";

  fetch(ENDPOINTS.PRODUCTS)
    .then((res) => res.json())
    .then((data) => {
      const html = data
        .map(
          (product) => `
        <li class='client-card'>
          <img src=${product.image} alt=${product.title} width='100' height='100' class='client-avatar' style="object-fit: contain;"/>
          <p class='client-name'>${product.title}</p>
        </li>
      `
        )
        .join("");
      elements.clientsList.innerHTML = html;
    });
}

export function showFeedback() {
  setSectionActive("feedback");
  elements.clientsList.innerHTML = "<h2>Loading...</h2>";

  fetch(ENDPOINTS.FEEDBACK)
    .then((res) => res.json())
    .then((data) => {
      const html = data
        .map(
          (comment) => `
        <li class='client-card feedback'>
          <p>${comment.body}</p>
          <p class='client-name'>- ${comment.name}</p>
        </li>
      `
        )
        .join("");
      elements.clientsList.innerHTML = html;
    });
}
