const icons = {
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/>',
  arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
  home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1Z"/>',
  sprout: '<path d="M12 21v-9M12 15C4 16 3 11 3 7c6-1 10 2 9 8Zm0-4c0-6 3-9 9-8 0 6-3 9-9 8Z"/>',
  shield: '<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6Z"/><path d="m8 12 3 3 5-6"/>',
  pin: '<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2"/>',
  chat: '<path d="M21 11.5a9 9 0 0 1-13.3 7.9L3 21l1.6-4.7A9 9 0 1 1 21 11.5Z"/><path d="M8 7c0 5 4 8 8 8l1-2-3-1-1 1-3-3 1-1-1-3Z"/>',
  people: '<circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 5v2"/>',
  plus: '<path d="M5 12h14M12 5v14"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>'
};
document.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[el.dataset.icon] || ''}</svg>`; });
// Number sourced from the owner's existing repository; Brazil country code added.
const whatsappNumber = '5519994931313';
document.querySelectorAll('[data-whatsapp]').forEach(link => {
  link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(link.dataset.message || 'Olá! Gostaria de conhecer melhor o Nosso Lar e tirar algumas dúvidas.')}`;
  link.target = '_blank'; link.rel = 'noopener noreferrer';
});
document.querySelector('#year').textContent = new Date().getFullYear();
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Abrir menu'); nav.classList.remove('open'); }
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu'); nav.classList.toggle('open', open); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(b => { b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button)); });
  document.querySelectorAll('[data-category]').forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; });
}));
const lightbox = document.querySelector('.lightbox');
document.querySelectorAll('[data-image]').forEach(card => card.addEventListener('click', () => {
  lightbox.querySelector('img').src = card.dataset.image;
  lightbox.querySelector('img').alt = card.querySelector('img').alt;
  lightbox.querySelector('p').textContent = card.dataset.caption;
  lightbox.showModal(); document.body.classList.add('modal-open');
}));
lightbox.querySelector('button').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.close(); });
lightbox.addEventListener('close', () => document.body.classList.remove('modal-open'));
