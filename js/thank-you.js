const refs = {
    openMenuBtn: document.querySelector('[data-thank-open]'),
    closeMenuBtn: document.querySelector('[data-thank-close]'),
    menu: document.querySelector('[data-thank]'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }