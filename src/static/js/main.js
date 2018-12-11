$(document).ready(function () { // end hover

	// выпадающее меню User
	$('.user').hover(
		function () {
			clearTimeout($.data(this, 'timer'));
			$('.dropdown-menu', this).stop().slideDown(200);
		},
		function () {
			$.data(this, 'timer', setTimeout($.proxy(function () {
				$('.dropdown-menu', this).stop().slideUp(200);
			}, this), 500));
		});	// end .user hover

	// выпадающее меню MegaMenu
	$('.catalog').hover(
		function () {
			clearTimeout($.data(this, 'timer'));
			$('.mega_menu', this).stop().fadeIn(200);
			$('a.catalog_name').removeClass('catalog_name').addClass('catalog_name2');
		},
		function () {
			$.data(this, 'timer', setTimeout($.proxy(function () {
				$('.mega_menu', this).stop().fadeOut(200);
				$('a.catalog_name2').removeClass('catalog_name2').addClass('catalog_name');
			}, this), 500));
		});	// end MegaMenu hover

	// Счетчик корзины 
	$('.add-cart').click(function (e) { 
		e.preventDefault();
		var badge = $('#badge-cart').text();
		badge++;
		$('#badge-cart').text(badge);
	});

	// Перемотка страницы вверх
	$(window).scroll(function () { 
		if ($(this).scrollTop() > (400)) {			// $(this).height()/2
			$('.top_arrow').css('right', '3rem');
		} else {
			$('.top_arrow').css('right', '-10rem');
		}
	});
	$('.top_arrow').click(function () { 
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

	// Функция прелодера
	function preload() {
		$('.preload').delay(500).fadeOut('slow');
	}

	$(window).on('load', function () {
		preload();
	});
}); // end ready