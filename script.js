//menu-burger
const iconMenu = document.querySelector('.icon-menu')
const menuBody = document.querySelector('.header__nav')
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.documentElement.classList.toggle('_lock')
    iconMenu.classList.toggle('_active')
    menuBody.classList.toggle('_active')
  })
}

const buttons = document.querySelectorAll('.header__item')

buttons.forEach(button => button.addEventListener('click', closeMenuBurger))

function closeMenuBurger() {
  document.documentElement.classList.remove('_lock')
  iconMenu.classList.remove('_active')
  menuBody.classList.remove('_active')

}


const typeOfworksList = document.querySelector('.typeOfworks__list')

typeOfworksList.addEventListener('click', function (e) {
  const listItem = e.target.closest('.typeOfworks__item');
  const arrow = listItem.querySelector('.icon-arrow_down_icon');
  if (!listItem) return;
  const currentActiveItem = typeOfworksList.querySelector('._active');
  const currentActiveArrow = typeOfworksList.querySelector('.icon-arrow_down_icon._active');
  const currentParagraph = typeOfworksList.querySelector('.typeOfworks__paragraph');
  currentActiveItem?.classList.remove('_active');
  currentActiveArrow?.classList.remove('_active');

  if (currentActiveItem != listItem) {
    listItem.classList.add('_active');
    arrow.classList.add('_active');
  }
});



new Swiper('.gallery__swiper-container', {
  observer: true,
  observerParents: true,
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 800,
  loop: false,
  centeredSlides: true,
  watchOverflow: true,
  // loopAdditionalSlides: 1,
  preloadImages: false,
  parallax: true,
  navigation: {
    nextEl: '.gallery__swiper-container .gallery__swiper-button-next',
    prevEl: '.gallery__swiper-container .gallery__swiper-button-prev',
  },
  pagination: {
    el: '.gallery__swiper-container .swiper-pagination',
    type: 'progressbar',
  },
  // effect: 'fade',
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //   },
  //   991: {
  //     slidesPerView: 3,
  //   },
  // }

});

//conection buttons with swiper containers
const galleryButtons = document.querySelectorAll('.gallery__button');

galleryButtons.forEach(button => button.addEventListener('click', showGallery));
galleryButtons.forEach(button => button.addEventListener('click', activeButton));

function showGallery(e) {
  const value = e.target.dataset.filter;
  // const currentButton = e.target.closest('.gallery__button');
  const gallerySwiperContainers = document.querySelectorAll('.gallery__swiper-container');

  gallerySwiperContainers.forEach(item => {
    item.classList.remove('_active');
    // currentButton.classList.remove('_active');

    let curValue = item.classList.contains(value)
    if (curValue == true) {
      item.classList.add('_active');
      // currentButton.classList.add('_active');
    }
  })
}

function activeButton() {
  const currentButton = document.querySelector('.gallery__button._active');
  currentButton.classList.remove('_active');
  this.classList.add('_active');
  
}
 

// const galleryButtons = document.querySelectorAll('.gallery__button');
// const gallerySwiperContainers = document.querySelectorAll('.gallery__swiper-container');

// galleryButtons.forEach(button => button.addEventListener('click', showGallery));

// function showGallery(e) {
//   const value = e.target.dataset.filter;

//   gallerySwiperContainers.forEach(container => {
//     if (container.classList.contains(value)) {
//       container.classList.add('_active');
//     } else {
//       container.classList.remove('_active');
//     }
//   });
// }

//popup hero
const heroButton = document.querySelector('.hero__button');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.close-popup');

heroButton.onclick = popup.onclick = popupClose.onclick = function (e) {
  if (e.target !== this) return;
  popup.classList.toggle('_open');
  document.documentElement.classList.toggle('_lock');
}


//popup footer 
const popupFooterLink = document.querySelector('.popup-footer__link');
const popupFooter = document.querySelector('.popup-footer');
const popupFooterClose = document.querySelector('.popup-footer__close');

popupFooterLink.onclick = popupFooterClose.onclick = popupFooter.onclick = function (e) {
  e.stopPropagation();
  if (e.target !== this) return;

  popupFooter.classList.toggle('_open');
  document.documentElement.classList.toggle('_lock');
}


//scroll to anchors
const menuLinks = document.querySelectorAll('.header__link[data-goto]')

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick)
  })

  function onMenuLinkClick(e) {
    const menuLink = e.target
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto)
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight + 100

      window.scrollTo({
        // top: gotoBlock.offsetTop,
        top: gotoBlockValue,
        behavior: "smooth"
      })
      e.preventDefault()
    }
  }
}
