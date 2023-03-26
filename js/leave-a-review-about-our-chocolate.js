const feedbackBackdrop = document.querySelector('[data-feedback]');
const feedbackCloseBtn = document.querySelector('[data-feedback-close]');
const submitReviewBtn = document.querySelector('.submit-review');
const reviewForm = document.querySelector('.review-form');
const reviewBackdrop = document.querySelector('[data-review]');
const reviewCloseBtn = document.querySelector('[data-review-close]');
const reviewOpenBtn = document.querySelector('[data-review-open]');

reviewOpenBtn.addEventListener('click', () => {
  reviewBackdrop.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
});

reviewCloseBtn.addEventListener('click', () => {
  reviewBackdrop.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
});

submitReviewBtn.addEventListener('click', function () {
  reviewBackdrop.classList.add('is-hidden');
  feedbackBackdrop.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
});

feedbackCloseBtn.addEventListener('click', function () {
  feedbackBackdrop.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
  reviewForm.submit();
});

window.addEventListener('beforeunload', function (event) {
  if (!feedbackBackdrop.classList.contains('is-hidden')) {
    reviewForm.submit();
  }
});
