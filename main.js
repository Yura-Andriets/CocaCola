
/**
 * Created by Юрий on 01.06.2021.
 */


const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    loop: true,
});

function toggleMenu() {
    const menuToogle = document.querySelector(".toggle");
    const navigation = document.querySelector(".navigation");
    menuToogle.classList.toggle("active");
    navigation.classList.toggle("active");
}