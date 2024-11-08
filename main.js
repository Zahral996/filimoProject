import "./swiper/swiper-bundle.min.css"
import "./public/css/main.css"
// import './swiper/swiper-bundle.css';
import Swiper from "./swiper/swiper-bundle.min"
import Menu from "./public/js/Menu/Menu"
import Slider from "./public/js/Slider/Slider"
import FilimoDevices from "./public/js/FilimoDevices/FilimoDevices.js"
import HowWorks from "./public/js/HowWorks/HowWorks.js"
import Children from "./public/js/Children/Children.js"
import Cinema from "./public/js/Cinema.js/Cinema.js"
import Footer from "./public/js/Footer/Footer.js"
import Faq from "./public/js/Faq/Faq.js";
import FooterLinks from "./public/js/FooterLinks/FooterLinks.js"
import FreeMovies from "./public/js/FreeMovies/FreeMovies.js";
import Comments from "./public/js/Comments/Comments.js";
import Best from "./public/js/Best/Best.js";


function initSlider(){
  var swiper1 = new Swiper(".mySwiper1", {
    effect: 'fade', 
    fadeEffect: {
        crossFade: true, 
    },
    autoplay: {
        delay: 2500, 
        disableOnInteraction: false, 
    },
    speed: 2000, 
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
}

function freeMovie(){
    var swiper2 = new Swiper(".mySwiper2", {
      slidesPerView: 2,
      spaceBetween: 20,
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".swiper-button-next2",
          prevEl: ".swiper-button-prev2",
      },
      breakpoints: {
          540: {
              slidesPerView: 4,
              spaceBetween: 20,
          },
          768: {
              slidesPerView: 5,
              spaceBetween: 20,
          },
          1024: {
              slidesPerView: 6,
              spaceBetween: 30,
          },
      },
  });
  }

function comments(){
  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next3",
        prevEl: ".swiper-button-prev3",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});

}

function episodesSlider(){
  var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next-4",
        prevEl: ".swiper-button-prev-4",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
});

}

async function allData(){
  await Menu()
  await Slider()
  await Best()
  await FilimoDevices()
  await HowWorks()
  await FreeMovies()
  await Children()
  await Cinema()
  await Comments()
  await Faq()
  await FooterLinks()
  await Footer()
  initSlider()
  freeMovie()
  comments()
  episodesSlider()
}

allData()



