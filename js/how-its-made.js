const videoCover = document.querySelector('.video-cover');
const playIcon = document.querySelector('.play-icon');
const video = document.querySelector('.video');

const coverStyles = {
  opacity: 1,
  transition: 'opacity 0.3s ease-in-out'
};

const iconStyles = {
  opacity: 1,
  transition: 'opacity 0.3s ease-in-out'
};

const hiddenStyles = {
  opacity: 0,
  pointerEvents: 'none'
};

videoCover.addEventListener('click', playVideo);
videoCover.addEventListener('touchstart', playVideo);

function playVideo() {
  Object.assign(videoCover.style, hiddenStyles);
  Object.assign(playIcon.style, hiddenStyles);

  Object.assign(videoCover.style, {
    opacity: 0,
    pointerEvents: 'none'
  });
  Object.assign(playIcon.style, {
    opacity: 0,
    pointerEvents: 'none'
  });

  video.classList.remove('is-hidden');
  video.src += '?autoplay=1';

  video.addEventListener('ended', function() {
    Object.assign(videoCover.style, coverStyles);
    Object.assign(playIcon.style, iconStyles);
    Object.assign(videoCover.style, {
      opacity: 1,
      pointerEvents: 'auto'
    });
    Object.assign(playIcon.style, {
      opacity: 1,
      pointerEvents: 'auto'
    });
    video.classList.add('is-hidden');
  });
}
