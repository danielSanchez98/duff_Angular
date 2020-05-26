console.log('working ss');
let loaded=false;
function carouselInit(){
    /* const slideAct = document.querySelectorAll('.carousel-slide');
     slideAct[0].classList.add('active'); */
  
     const SLIDETIME = 500; //ms
     // --------------------------
  
     const backButton = document.querySelector('.wbn-slider-back-btn');
     const forwardButton = document.querySelector('.wbn-slider-next-btn');
     const allSlides = Array.from(document.querySelectorAll('.carousel-slide'));
     let clickable = true;
     let active = null;
     let newActive = null;
  
     function initSlider() {
       allSlides.forEach(slide =>
         slide.setAttribute(
           'style',
           `transition: transform ${SLIDETIME}ms ease;
                        animation-duration: ${SLIDETIME}ms`,
         ),
       );
     }
   
     function changeSlide(forward) {
       if (clickable) {
         clickable = false;
         active = document.querySelector('.active');
         const activeSlideIndex = allSlides.indexOf(active);
         if (forward) {
           newActive = allSlides[(activeSlideIndex + 1) % allSlides.length];
           active.classList.add('slideOutLeft');
           newActive.classList.add('slideInRight', 'active');
         } else {
           newActive =allSlides[(activeSlideIndex - 1 + allSlides.length) % allSlides.length];
           active.classList.add('slideOutRight');
           newActive.classList.add('slideInLeft', 'active');
         }
       }
     }
  
     allSlides.forEach(slide => {
       slide.addEventListener('transitionend', e => {
         if (slide === active && !clickable) {
           clickable = true;
           active.className = 'carousel-slide';
         }
       });
     });
  
     //Event listeners
     forwardButton.addEventListener('click', () => {
       changeSlide(true);
     });
     backButton.addEventListener('click', () => {
       changeSlide(false);
     });
  
     
     // Init the slider
     initSlider();
   
   
  
  }

  document.addEventListener('DOMContentLoaded',()=>{
     loaded=true;
    
    carouselInit();
  });

  if(loaded){
    carouselInit();
    console.log('saasas');
  }