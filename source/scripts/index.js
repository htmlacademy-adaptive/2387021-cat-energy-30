/* в этот файл добавляет скрипты*/
const nav = document.querySelector('.main-nav');
const navButton = document.querySelector('.burger');

nav.classList.remove('main-nav--nojs');
navButton.classList.remove('burger--nojs');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('burger--active');
  nav.classList.toggle('main-nav--active');
});

const map = document.querySelector('.map__image-reserve');
map.classList.remove('map__image-reserve--nojs');
