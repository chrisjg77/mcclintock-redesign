define(['jquery'],function( $ ) {
	$(window).on('scroll',function() {
		var pos_top = $('#main').offset().top,
			scroll_top = $(this).scrollTop();

		if ( scroll_top >= pos_top ) {
			$('.fixed').css({
				'position':'relative',
				'right':0,
				// 'height':$(window).height(),
				'top':scroll_top-pos_top
			});
		} else {
			$('.fixed').css({
				'position':'relative',
				'top':0
			});
		}
	});
});