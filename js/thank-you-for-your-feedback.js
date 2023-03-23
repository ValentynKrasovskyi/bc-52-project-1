const refs = {
    openMenuBtn: document.querySelector('[data-feedback-open]'),
    closeMenuBtn: document.querySelector('[data-feedback-close]'),
    menu: document.querySelector('[data-feedback]'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll'); 
  }