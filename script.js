// header изменение цвета 
const header = document.querySelector('header')

window.addEventListener('scroll', function() {
    header.classList.toggle('sticky', this.window.scrollY > 80)
})
// Плавная прокрутка до якоря
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
// анимация скролла
ScrollReveal({
    reset: true,
    distance: '200px',
    diration: 60,
    delay:60
});

ScrollReveal().reveal('.home__h1, .home__navbar li, .home__btn', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.about, .awards', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.home__banner', { delay: 500, origin: 'right' });

// скрипт меню
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
}

// анимация прибавление цифр
$(document).ready(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 1200
  });
});