AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 160, // 動畫觸發位置(px)[底部距離動畫元素的位置，不要太高]
  delay: 0, // 動畫延遲
  duration: 400, // 動畫執行時間(ms)
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// var swiper = new Swiper(".mySwiper", {
//     autoplay:true,
//     pagination: {
//       el: ".swiper-pagination",
//       dynamicBullets: true,
//     },
//     breakpoints: {
//         768:{
//             autoplay:true
//         },
//       }
//   });

// var curPage = $(document).attr('title');


// $(document).ready(function() {
//   $( ".header-List" ).click(function() {
//     if (curPage ==)

//     this.toggleClass("disabled");
//   });
// });

// $(function(){
//   $( "#buy" ).click(function() {
//     $("#bbb").toggleClass("d-none");
//   });
// });
