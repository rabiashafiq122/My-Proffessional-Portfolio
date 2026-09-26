// Switches between panels when a tab button (or any "Get in touch" / "View Projects" button) is clicked.
const buttons = document.querySelectorAll('.tabs__btn');
const panels = document.querySelectorAll('.panel');
 
function showTab(name) {
  buttons.forEach(b => b.classList.toggle('active', b.dataset.tab === name));
  panels.forEach(p => p.classList.toggle('active', p.id === name));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
 
buttons.forEach(btn => {
  btn.addEventListener('click', () => showTab(btn.dataset.tab));
});
 
document.querySelectorAll('[data-goto]').forEach(el => {
  el.addEventListener('click', () => showTab(el.dataset.goto));
});
 
 