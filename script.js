const navLinks = [...document.querySelectorAll('.nav nav a')];
const sections = [...document.querySelectorAll('main section[id]')];

const updateActive = () => {
  const y = window.scrollY + 180;
  let current = 'home';
  sections.forEach(s => {
    if (y >= s.offsetTop) current = s.id;
  });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
};
window.addEventListener('scroll', updateActive, {passive:true});
updateActive();

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const el = document.querySelector(a.getAttribute('href'));
    if (el) {
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});
