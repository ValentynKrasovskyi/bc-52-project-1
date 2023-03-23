const menuOpenButton = document.querySelector('[data-menu-open]');
const menuCloseButton = document.querySelector('[data-menu-close]');
const menu = document.querySelector('[data-menu]');

menuOpenButton.addEventListener('click', () => {
  menu.classList.remove('is-hidden');
  menu.classList.remove('no-scroll');
});

menuCloseButton.addEventListener('click', () => {
  menu.classList.add('is-hidden');
  menu.classList.add('no-scroll');
});
