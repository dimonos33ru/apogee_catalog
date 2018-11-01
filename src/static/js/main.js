$(document).ready(function () {
	var list = ['Пожарные краны', 'Чугунные краны', 'Шайбы', 'Коллекторы',
						'Латунные краны', 'Гайки', 'Прижимы', 'Стволы'];

	list.forEach(function (item) {
		$('.lists').append('<li><a href=#>' + item + '</a></li>');
	})

	$('#hello').dialog({
		draggable: false,
		resizable: false,
		width: 600,
		height: 400,
		show: 400,
		hide: {
			effect: 'explode',
			delay: 250,
			duration: 1000,
			easing: 'easeInQuad'
		},
		position: 'center'
	});

}); // end ready