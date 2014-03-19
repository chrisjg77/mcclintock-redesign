define(['jquery'],function( $ ) {
	$(window).on('scroll',function() {
		var pos_top = $('#main').offset().top,
			scroll_top = $(this).scrollTop();


		if ( $(this).width() > 1024 ) {
			var elem = $('.fixed-lg');
		}

		if ( scroll_top >= pos_top ) {
			elem.css({
				'position':'relative',
				'right':0,
				// 'height':$(window).height(),
				'top':scroll_top-pos_top
			});
		} else {
			elem.css({
				'position':'relative',
				'top':0
			});
		}
	});
});