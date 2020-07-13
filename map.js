// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
  var myMap,
    myPlacemark1,
    myPlacemark2,
    myPlacemark3
  function init(){
      // Создание карты.
      myMap = new ymaps.Map("map", {
          // Координаты центра карты.
          // Порядок по умолчанию: «широта, долгота».
          // Чтобы не определять координаты центра карты вручную,
          // воспользуйтесь инструментом Определение координат.
          center: [55.72572629917817,37.58094875203176],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
          zoom: 15,
          controls: ['mediumMapDefaultSet', 'smallMapDefaultSet']
      });
      myMap.controls
        .remove('geolocationControl')
        .remove('trafficControl')
        .remove('rulerControl')
        .remove('searchControl')
        .remove('zoomControl');

      myMap.behaviors.disable(['drag', 'scrollZoom']);

      var zoomControl = new ymaps.control.ZoomControl({
        options: {
            size: "small",
            position: {
              bottom: "400px",
              left: "10px"
            }
        }
      });
      myMap.controls.add(zoomControl);

      myPlacemark1 = new ymaps.Placemark([55.722588069010655,37.58623899999999], {
        balloonContentHeader: '<img src="./src/assets/fav_forest.png" class="map-logo"><span class="map-baloon__header">Главный офис</span>',
        balloonContentBody: '<span class="map-baloon__body">Фрунзенская наб., д. 34</span>',
        balloonContentFooter: '<span class="map-baloon__footer">10:00 - 20:00</span>',
        hintContent: 'Зимние происшествия',
        iconContent: '1'
        },
        {
          preset: 'islands#redIcon'
        });

      myPlacemark2 = new ymaps.Placemark([55.721873069008765,37.573977000000006], {
        balloonContentHeader: '<img src="./src/assets/fav_forest.png" class="map-logo"><span class="map-baloon__header">Пункт выдачи</span>',
        balloonContentBody: '<span class="map-baloon__body">Комсомольский проспект, д. 40</span>',
        balloonContentFooter: '<span class="map-baloon__footer">10:00 - 20:00</span>',
        hintContent: 'Зимние происшествия',
        iconContent: '2'
        },
        {
          preset: 'islands#brownIcon'
        });

      myPlacemark3 = new ymaps.Placemark([55.72126506900727,37.57877399999999], {
        balloonContentHeader: '<img src="./src/assets/fav_forest.png" class="map-logo"><span class="map-baloon__header">Пункт выдачи</span>',
        balloonContentBody: '<span class="map-baloon__body">3-я Фрунзенская ул., д. 10</span>',
        balloonContentFooter: '<span class="map-baloon__footer">10:00 - 20:00</span>',
        hintContent: 'Зимние происшествия',
        iconContent: '3'
        },
        {
          preset: 'islands#nightIcon'
        });
      
        myMap.geoObjects.add(myPlacemark1).add(myPlacemark2).add(myPlacemark3);
  }