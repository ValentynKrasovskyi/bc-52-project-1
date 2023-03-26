var swiper1 = new Swiper('.swiper1', {
    speed: 400,
    initialSlide: 0,
    slidesPerView: 1,
    loop: true,
    pagination : {
      el: '.swiper-pagination1',
      type: 'bullets',
      clickable: true,
    }, 
    
    autoplay: {
     delay: 3000,
   },
    breakpoints: {
      375: {
        slidesPerView: 1,
      },
      
      768: {
        slidesPerView: 2,
        spaceBetween: 18
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 18
      },
    },   
  });
  var swiper2 = new Swiper('.swiper2', {
    speed: 400,
    initialSlide: 0,
    slidesPerView: 1,
    loop: true,
    pagination : {
      el: '.swiper-pagination2',
      type: 'bullets',
      clickable: true,
    }, 
    
    autoplay: {
     delay: 3000,
   },
    breakpoints: {
      375: {
        slidesPerView: 1,
      },
      
      768: {
        slidesPerView: 2,
        spaceBetween: 16
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 28,
      },
    },   
  });
  
