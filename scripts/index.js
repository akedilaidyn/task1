import { elements } from "./dom.js";
import { showClients, showProducts, showFeedback } from "./sections.js";
import { handleFormSubmit } from "./form.js";

elements.nav.clients.addEventListener("click", (e) => {
  e.preventDefault();
  showClients();
});
elements.nav.products.addEventListener("click", (e) => {
  e.preventDefault();
  showProducts();
});
elements.nav.feedback.addEventListener("click", (e) => {
  e.preventDefault();
  showFeedback();
});

elements.burgerMenuBtn.addEventListener("click", () => {
  elements.burgerMenuBtn.classList.toggle("hidden");
  elements.sidebar.classList.toggle("show");
});

elements.closeMenuBtn.addEventListener("click", () => {
  elements.sidebar.classList.remove("show");
  elements.burgerMenuBtn.classList.remove("hidden");
});

elements.nav.sidebarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const section = link.dataset.section;
    if (section === "clients") showClients();
    if (section === "products") showProducts();
    if (section === "feedback") showFeedback();

    elements.sidebar.classList.remove("show");
    elements.burgerMenuBtn.classList.remove("hidden");
  });
});

elements.updatesForm.addEventListener("submit", handleFormSubmit);

function init() {
  if (elements.currentYearEl) {
    elements.currentYearEl.textContent = new Date().getFullYear();
  }
  showClients();
}

init();
