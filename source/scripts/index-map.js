const center = [59.938700351854315, 30.323047397817493];
let ymaps;
function init() {
  const map = new ymaps.Map(document.querySelector('.map__image'), {
    center: center,
    zoom: 14
  });

  const placemark = new ymaps.Placemark(center, {
    hintContent: 'Cat Energy',
    balloonContent: 'ул. Большая Конюшенная, д. 19/8 Санкт-Петербург, вход с торца'
  },
  {
    iconLayout: 'default#image',
    iconImageHref: '../images/map-pin-mob@2x.png',
    iconImageSize: [57, 53],
    iconImageOffset: [-20, -45]
  });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил

  map.geoObjects.add(placemark);
}

ymaps.ready(init);
