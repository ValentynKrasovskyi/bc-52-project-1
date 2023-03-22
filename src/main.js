


// =========================== MOB MENU ===========================
const mobMenuOpenBtn = document.querySelector('.mob-menu-open');
const mobMenuCloseBtn = document.querySelector('.mob-menu-close');
const mobMenu = document.querySelector('.mob-menu');

mobMenuOpenBtn.addEventListener('click', () => {
  mobMenu.classList.add('menu-open');
});

mobMenuCloseBtn.addEventListener('click', () => {
  mobMenu.classList.remove('menu-open');
});

// /=========================== MOB MENU ===========================