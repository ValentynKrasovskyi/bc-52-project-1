const thankBackdrop = document.querySelector('[data-thank]');
const thankCloseBtn = document.querySelector('[data-thank-close]');
const submitBuynowBtn = document.querySelector('.submit-buynow');
const buynowForm = document.querySelector('.bynow-form');
const buynowBackdrop = document.querySelector('[data-buynow]');
const buynowCloseBtn = document.querySelector('[data-buynow-close]');
const buynowOpenBtn = document.querySelector('[data-buynow-open]');
const dataBuyOpen = document.querySelector('[data-buy-open]');

buynowOpenBtn.addEventListener('click', () => {
  buynowBackdrop.classList.remove('is-hidden');
});

dataBuyOpen.addEventListener('click', () => {
  buynowBackdrop.classList.remove('is-hidden');
});

buynowCloseBtn.addEventListener('click', () => {
  buynowBackdrop.classList.add('is-hidden');
});

submitBuynowBtn.addEventListener('click', function () {
  buynowBackdrop.classList.add('is-hidden');
  thankBackdrop.classList.remove('is-hidden');
});

thankCloseBtn.addEventListener('click', function () {
  thankBackdrop.classList.add('is-hidden');
  buynowForm.submit();
});

window.addEventListener('beforeunload', function (event) {
  if (!thankBackdrop.classList.contains('is-hidden')) {
    buynowForm.submit();
  }
});
