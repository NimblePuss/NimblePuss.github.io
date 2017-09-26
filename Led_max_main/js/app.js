$(document).click(function(event) {
	if ($(event.target).closest("#btn_search").length) return;
	$("#frm_serch").hide("slow");
	event.stopPropagation();
});
$(document).ready(function() {





	$("#frm_serch").hide();
    $("#btn_search").click(function () {
		$("#frm_serch").toggle();
    });

    $("#cls_search").click(function () {
	    $("#frm_serch").hide();
    });

    $(".sml_txt").hover(
    	function (e) {
			$(this).parent().addClass("active_sml");
			// $(this).siblings('.sml_menu_hover').show('slow');
		});
	var sml_menu_h = $('.sml_menu_hover');
    sml_menu_h.mouseleave(function () {
        $(this).parent().removeClass("active_sml");
	    // $(this).siblings('.sml_menu_hover').hide('slow');

    });

    $('.sl_01').slick({
        arrows: true,
        autoplay:true,
        autoplaySpeed:3000,
        infinite: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },

        ]
    });
    $('.sl_03').slick({
        arrows: true,
        autoplay:true,
        autoplaySpeed:3000,
        infinite: true,
        slidesToShow: 8,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '100px',
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerMode: true,
                    centerPadding: '100px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 460,
                settings: {
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 2
                }
            }
        ]
    });
    // });
	// var $menu = $(".stick-nav");
    //
	// $(window).scroll(function(){
	// 	if ( $(this).scrollTop() > 100 ){
	// 		$(".stick-nav").addClass("stick-nav__fixed");
	// 		$(".header-content").css('margin-top', '150px');
	// 	} else if($(this).scrollTop() <= 100) {
	// 		$(".stick-nav").removeClass("stick-nav__fixed");
	// 		$(".header-content").css('margin-top', '70px');
	// 	}
	// });//scroll
	// $("a[href*=#]").bind("click", function(e){
	// 	var anchor = $(this);
	// 	$('html, body').stop().animate({
	// 		scrollTop: $(anchor.attr('href')).offset().top
	// 	}, 1000);
	// 	e.preventDefault();
	// 	return false;
	// });
});

var map;
function initMap() { // Функция initMap которая отрисует карту на странице
    // Определяем переменную map
    // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
    var mapOpts = {
        // При создании объекта карты необходимо указать его свойства
        zoom: 10,// zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
        center: {lat: 54.2107161, lng: 36.6157524},// center - определяем точку на которой карта будет центрироваться
        disableDefaultUI: true //выключаем елементы управления
    };
    map = new google.maps.Map(document.getElementById('map'), mapOpts);
    if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        map.setOptions({'draggable': false});
    }

    var marker = new google.maps.Marker({// Создаем маркер на карте

        position: {lat: 54.2107161, lng: 36.6157524},// Определяем позицию маркера
        // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
        map: map,
        // Пишем название маркера - появится если навести на него курсор и немного подождать
        title: 'поселок Ханино, Суворовский район, Тульская область, Россия',
        // Укажем свою иконку для маркера
        icon: 'img/layer.png'
    })
}




