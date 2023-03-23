const refs = {
    openMenuBtn: document.querySelector('[data-buy-open]'),
    closeMenuBtn: document.querySelector('[data-buy-close]'),
    menu: document.querySelector('[data-buy]'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }