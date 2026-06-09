// Header shadow on scroll
const header = document.querySelector('.site-header');
const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll); onScroll();

// Mobile nav
const burger = document.querySelector('.burger');
const links = document.querySelector('.nav-links');
burger && burger.addEventListener('click', () => links.classList.toggle('open'));

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Gallery filter
document.querySelectorAll('.filters').forEach(bar => {
  bar.addEventListener('click', (e) => {
    const btn = e.target.closest('button'); if (!btn) return;
    bar.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.gallery .item').forEach(it => {
      it.classList.toggle('hide', !(f === 'all' || it.dataset.cat === f));
    });
  });
});

// Contact form (demo)
const form = document.querySelector('#contact-form');
form && form.addEventListener('submit', (e) => {
  e.preventDefault();
  const note = document.querySelector('#form-note');
  note.textContent = 'Dziękujemy. Odezwiemy się w ciągu 24 godzin roboczych.';
  form.reset();
});
