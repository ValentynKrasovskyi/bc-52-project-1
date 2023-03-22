// Buy now
(() => {
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
})();
// Explore our new chocolate first
(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-explore-open]'),
    closeMenuBtn: document.querySelector('[data-explore-close]'),
    menu: document.querySelector('[data-explore]'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
// Thank you for your feedback
(() => {
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
})();
// MENU
(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
// Leave a review about our chocolate
(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-review-open]'),
    closeMenuBtn: document.querySelector('[data-review-close]'),
    menu: document.querySelector('[data-review]'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
// Thank you
(() => {
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
})();
