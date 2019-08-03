ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 4
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),


        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Москва',
            balloonContent: '<div class="map-marker-info">\n' +
                '            <div class="header-marker">\n' +
                '                <h3 class="title-marker">Подольск</h3>\n' +
                '            </div>\n' +
                '            <div class="content-body-marker">\n' +
                '                <div class="image-marker">\n' +
                '                    <img src="image/map-country2.jpg" alt="country">\n' +
                '                </div>\n' +
                '                <p class="map-info-marker">Телефон:\n' +
                '(812) 939-59-69</p>' +
                '<p class="map-info-marker">Адрес: Московская область, Подольск</p>\n' +
                '            </div>\n' +
                '        </div>',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'image/marker-light.png',
            // Размеры метки.
            iconImageSize: [26, 54],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-14, -50]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([56.76301984086739,60.80596933068848], {
            hintContent: 'Екатеринбург',
            balloonContent: '<div class="map-marker-info">\n' +
                '            <div class="header-marker">\n' +
                '                <h3 class="title-marker">Екатеринбург</h3>\n' +
                '            </div>\n' +
                '            <div class="content-body-marker">\n' +
                '                <div class="image-marker">\n' +
                '                    <img src="image/map-country.jpg" alt="country">\n' +
                '                </div>\n' +
                '                <p class="map-info-marker">Телефон:\n' +
                '(812) 939-59-69</p>' +
                '<p class="map-info-marker">Адрес: Екатеринбург, ул. Бахчиванджи, д.2</p>\n' +
                '            </div>\n' +
                '        </div>',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'image/marker-dark.png',
            // Размеры метки.
            iconImageSize: [26, 54],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-14, -50],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent1 = new ymaps.Placemark([59.91807704072416,30.304899499999895], {
            hintContent: 'Санкт-Петербург',
            balloonContent: '<div class="map-marker-info">\n' +
                '            <div class="header-marker">\n' +
                '                <h3 class="title-marker">Санкт-Петербург</h3>\n' +
                '            </div>\n' +
                '            <div class="content-body-marker">\n' +
                '                <div class="image-marker">\n' +
                '                    <img src="image/map-country3.jpg" alt="country">\n' +
                '                </div>\n' +
                '                <p class="map-info-marker">Телефон:\n' +
                '(812) 329-55-59</p>' +
                '<p class="map-info-marker">Адрес:   ул. Химиков 26, 1 этаж</p>\n' +
                '            </div>\n' +
                '        </div>',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'image/marker-dark.png',
            // Размеры метки.
            iconImageSize: [26, 54],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-14, -50],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent2 = new ymaps.Placemark([59.84868756428404,30.457774999999945], {
            hintContent: 'Санкт-Петербург',
            balloonContent: '<div class="map-marker-info">\n' +
                '            <div class="header-marker">\n' +
                '                <h3 class="title-marker">Санкт-Петербург</h3>\n' +
                '            </div>\n' +
                '            <div class="content-body-marker">\n' +
                '                <div class="image-marker">\n' +
                '                    <img src="image/map-country4.jpg" alt="country">\n' +
                '                </div>\n' +
                '                <p class="map-info-marker">Телефон:\n' +
                '(812) 334-91-08</p>' +
                '<p class="map-info-marker">Адрес:\n' +
                'шоссе Митрофаньевское, д.8А, лит.Б, помещение 13  </p>\n' +
                '            </div>\n' +
                '        </div>',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'image/marker-light.png',
            // Размеры метки.
            iconImageSize: [26, 54],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-14, -50],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
    myPlacemarkWithContent3 = new ymaps.Placemark([55.827459068922415,38.266084], {
        hintContent: 'Москва',
        balloonContent: '<div class="map-marker-info">\n' +
            '            <div class="header-marker">\n' +
            '                <h3 class="title-marker">Обухово</h3>\n' +
            '            </div>\n' +
            '            <div class="content-body-marker">\n' +
            '                <div class="image-marker">\n' +
            '                    <img src="image/map-country5.jpg" alt="country">\n' +
            '                </div>\n' +
            '                <p class="map-info-marker">Телефон:\n' +
            '(812) 939-59-69</p>' +
            '<p class="map-info-marker">Адрес:Московская обл., ' +
            'Ногинский район, Обухово, Кудиновское шоссе, д. 17</p>\n' +
            '            </div>\n' +
            '        </div>',
        iconContent: ''
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'image//marker-dark.png',
        // Размеры метки.
        iconImageSize: [26, 54],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-14, -50],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 15],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });
    myPlacemarkWithContent4 = new ymaps.Placemark([56.35169956838509,43.878452499999916], {
        hintContent: 'Нижний Новгород',
        balloonContent: '<div class="map-marker-info">\n' +
            '            <div class="header-marker">\n' +
            '                <h3 class="title-marker">Нижний Новгород</h3>\n' +
            '            </div>\n' +
            '            <div class="content-body-marker">\n' +
            '                <div class="image-marker">\n' +
            '                    <img src="image/map-country6.jpg" alt="country">\n' +
            '                </div>\n' +
            '                <p class="map-info-marker">Телефон:\n' +
            '(812) 939-59-69</p>' +
            '<p class="map-info-marker">Адрес: Нижний Новгород,' +
            ' ул. Щербакова, д.31</p>\n' +
            '            </div>\n' +
            '        </div>',
        iconContent: ''
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'image//marker-light.png',
        // Размеры метки.
        iconImageSize: [26, 54],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-12, -50],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 17],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });


    //отключаем зум колёсиком мышки
    myMap.behaviors.disable('scrollZoom');

// //на мобильных устройствах... (проверяем по userAgent браузера)
//     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
//         //... отключаем перетаскивание карты
//         myMap.behaviors.disable('drag');
//     }

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent)
        .add(myPlacemarkWithContent1)
        .add(myPlacemarkWithContent2)
        .add(myPlacemarkWithContent3)
        .add(myPlacemarkWithContent4);
});