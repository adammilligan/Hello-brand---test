const reserve = document.querySelector('.button-reserve')

reserve.addEventListener('click', (event) => {
  event.preventDefault();
})

const submit = document.querySelector('#submit-button')

submit.addEventListener('click', (event) => {
  event.preventDefault();
})


$(document).ready(function(){
  
  const svgIconLeft = `<svg width="23" height="50" viewBox="0 0 23 50" fill="none" stroke="#FFFFFF" transform='rotate(180)' xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.10418 1.89998L20.1209 20.9166C22.3667 23.1625 22.3667 26.8375 20.1209 29.0833L1.10419 48.1" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`
  const svgIconRight = `<svg width="23" height="50" viewBox="0 0 23 50" fill="none" stroke="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.10418 1.89998L20.1209 20.9166C22.3667 23.1625 22.3667 26.8375 20.1209 29.0833L1.10419 48.1" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`
  
  $('.js-slider-reviews').owlCarousel({
    items:1,
    nav:true,
    loop: true,
    navText: [`<button class="review-button button-left">
                    ${svgIconLeft}
                </button>`,`<button class="review-button button-right">
                    ${svgIconRight}
                </button>`]

  });

  $('.js-slider-interior').owlCarousel({
    center: true,
    items:1,
    margin: 30,
    nav:true,
    loop: true,
    autoWidth: true,


    navText: [`<button class="interior-button button-left-picture">
                    ${svgIconLeft}
                </button>`,`<button class="interior-button button-right-picture">
                    ${svgIconRight}
                </button>`]
  });
});


$(document).ready(function(){
  
});
