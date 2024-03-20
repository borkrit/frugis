$('.first-screen').slick({
    dots:true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      
      {
        breakpoint: 769,
        settings: {
          arrows : false
        }
      },
      
    
      
  ]
});

$('.variant__slider').slick({
    dots:false,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true,
                arrows : false
            }
        },



    ]
});


// mobile meny 
let btn_meny = document.querySelector('.humburger');
let mobile_menu = document.querySelector('.mobile-menu');
let btn_close = document.querySelector('.close');
let body = document.querySelector('body');

btn_meny.addEventListener('click', ()=>{
  mobile_menu.style.display='block';
  body.style.overflow='hidden';
});
btn_close.addEventListener('click',()=>{
  mobile_menu.style.display='none';
  body.style.overflow='scroll';
})

let actionBtn = document.getElementsByClassName('action-btn');
let formText = document.querySelector('#email-text');
let formContact = document.querySelector('#form-contact');
let arrayBtn= [...actionBtn];
arrayBtn.forEach(el => el.addEventListener('click', ()=>{
    formText.innerText = `Chcialbym porozmawiać o productie : " ${el.dataset.prod}" `

}) )

// Regulamin

let regul = document.querySelector('.regulamin');
let btnsClose = [...document.querySelectorAll('.regulamin__btn')]

btnsClose.forEach(el=> el.addEventListener('click',()=>{
    regul.dataset.open = 'hidden'
}))
