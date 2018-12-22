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
	window.onclick = function(event) {
		var target = event.target;
		
		if (target.closest('.catalog')) {
			$('.mega_menu').stop().fadeToggle(200);
			$('.catalog_name').toggleClass('catalog_name2');
		} else {
			$('.mega_menu').stop().fadeOut(200);
			$('a.catalog_name').removeClass('catalog_name2');
		}
	};	// end MegaMenu hover

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

	// Окна чата
	$('.chat__head').click(function (e) { 
		e.preventDefault();
		if ($('.chat').css('bottom') == '0px') {
			$('.chat').css('bottom', '-252px');
			$(this).css('cursor', 'pointer');
		} else {
			$('.chat').css('bottom', '0px');
			$(this).css('cursor', 'default');
		}
    return false;	
	});

	// Выделение строки таблицы
	$('table').on('click', '.tr_sel', function () {
		if ($(this).hasClass('selected')) {
			$(this).removeClass('selected');
		} else {
			$('.tr_sel').removeClass('selected');
			$(this).addClass('selected');
		}
	});
}); // end ready