(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-buynow-open]"),
    closeMenuBtn: document.querySelector("[data-buynow-close]"),
    menu: document.querySelector("[data-buynow]"),
  };

  refs.openMenuBtn.addEventListener("click", togglemenu);
  refs.closeMenuBtn.addEventListener("click", togglemenu);

  function togglemenu() {
    refs.menu.classList.toggle("is-hidden");
    document.body.classList.toggle('no-scroll');
  }
<<<<<<< Updated upstream
})();
=======
})();
>>>>>>> Stashed changes
