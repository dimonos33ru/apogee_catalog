$(document).ready(function () { // end hover

	$('.user').hover(
		function () {
			clearTimeout($.data(this, 'timer'));
			$('.dropdown-menu', this).stop().slideDown(200);
		},
		function () {
			$.data(this, 'timer', setTimeout($.proxy(function () {
				$('.dropdown-menu', this).stop().slideUp(200);
			}, this), 600));
		});

}); // end ready