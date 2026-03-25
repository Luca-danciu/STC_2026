const navLinks = document.querySelectorAll(".menu a");
const sections = document.querySelectorAll("main section[id]");
const yearSpan = document.getElementById("year");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const setActiveLink = () => {
  let currentId = "home";
  const offset = window.scrollY + 140;

  sections.forEach((section) => {
    if (offset >= section.offsetTop) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
  });
};

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);

function showForm(formId, btn) {
  document.querySelectorAll(".form-box").forEach((el) => {
    el.style.display = "none";
  });

  document.getElementById(formId).style.display = "block";

  // active button styling
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}