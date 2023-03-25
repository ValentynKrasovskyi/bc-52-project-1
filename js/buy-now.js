(() => {
  const refs = {
    openBuynowBtn: document.querySelectorAll("[data-buynow-open]"),
    closeBuynowBtn: document.querySelector("[data-buynow-close]"),
    menu: document.querySelector("[data-buynow]"),
  };

  refs.openBuynowBtn.forEach(btn => {btn.addEventListener("click", togglemenu); })
    
  refs.closeBuynowBtn.addEventListener("click", togglemenu);

  function togglemenu() {
    refs.menu.classList.toggle("is-hidden");
    document.body.classList.toggle('no-scroll');
  }
})();
