const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const openBurger = document.querySelector('.open-burger-menu')
openBurger.addEventListener('click', () =>{
    document.querySelector('.burger').style.display = 'block'
})

const closeBurger = document.querySelector('.close-burger-menu')
closeBurger.addEventListener('click', () =>{
    document.querySelector('.burger').style.display = 'none'
})

