/* в этот файл добавляет скрипты*/
const nav = document.querySelector('.main-nav');
const navButton = document.querySelector('.burger');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('burger--active');
  nav.classList.toggle('main-nav--active');
})
