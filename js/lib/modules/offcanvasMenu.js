define(['jquery'],function( $ ) {

	// Shorten jquery selectors
	var body = $('body');

	// On menu icon click, open the menu if it is not already open
	$(document).on('click','#menuHandle',function() {
		if ( !body.hasClass('menuOpen') ) {
			body.addClass('menuOpen')
		} 
		else {
			body.removeClass('menuOpen');
		}
	});
	// After the menu is open, check for window resizing.
	// If window is resized greater than desktop width, close the nav
	// menu.
	$(window).on('resize',function() {
		if ( $(this).width() > 1024 ) {
			body.removeClass('menuOpen');
		}
	});
	
});