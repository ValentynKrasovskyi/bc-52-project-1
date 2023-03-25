const menuOpenButton = document.querySelector('[data-menu-open]');
const menuCloseButton = document.querySelector('[data-menu-close]');
const menu = document.querySelector('[data-menu]');

menuOpenButton.addEventListener('click', () => {
  menu.classList.remove('is-hidden');
});

menuCloseButton.addEventListener('click', () => {
  menu.classList.add('is-hidden');
});

const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');


smoothScrollLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    
    const targetId = link.getAttribute('href');

    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});









