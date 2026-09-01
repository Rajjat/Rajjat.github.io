const toggle = document.getElementById("themeToggle");
const menu = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
  toggle.textContent = document.body.classList.contains("darkmode") ? "☀" : "◐";
});

menu.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold: 0.08});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

window.addEventListener("scroll", () => {
  const h = document.documentElement;
  const progress = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  document.querySelector(".progress").style.width = progress + "%";
});
