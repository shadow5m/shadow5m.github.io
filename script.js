const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('[data-page]');

menuBtn?.addEventListener('click', () => nav.classList.toggle('open'));

function showPage(id){
  const target = document.getElementById(id) || document.getElementById('home');
  pages.forEach(p => p.classList.remove('active-page'));
  target.classList.add('active-page');

  document.querySelectorAll('.nav a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === target.id);
  });

  nav.classList.remove('open');
  window.scrollTo({top:0, behavior:'smooth'});
  history.replaceState(null, '', '#' + target.id);
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    const id = link.dataset.page;
    if(id){
      e.preventDefault();
      showPage(id);
    }
  });
});

window.addEventListener('load', () => {
  const id = location.hash.replace('#','') || 'home';
  showPage(id);
});

function soon(){
  const toast = document.getElementById('toast');
  toast.textContent = '⚡ الميزة دي هتنزل قريباً';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}
