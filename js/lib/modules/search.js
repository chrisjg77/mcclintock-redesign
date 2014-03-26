define(['jquery'],function( $ ) {

	$(document).on('focusin','.search-bar-input',function() {
		$('body').addClass('searchActive');
	});

	$(document).on('focusout','.search-bar-input',function() {
		$('body').removeClass('searchActive');
	});

});