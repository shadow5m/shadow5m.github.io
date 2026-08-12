const topBtn = document.getElementById("topBtn");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold: .12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

window.addEventListener("scroll", () => {
  topBtn.classList.toggle("show", window.scrollY > 500);
  const sections = [...document.querySelectorAll("main section[id]")];
  const current = sections.find(s => window.scrollY >= s.offsetTop - 160 && window.scrollY < s.offsetTop + s.offsetHeight);
  document.querySelectorAll("nav a").forEach(a => a.classList.toggle("active", current && a.getAttribute("href") === "#" + current.id));
});

topBtn.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

document.querySelectorAll('a[href="#"]').forEach(a => {
  a.addEventListener("click", e => e.preventDefault());
});
