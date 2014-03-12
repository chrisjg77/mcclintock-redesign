
define(['jquery'],function( $ ) {

	$(document).on('click','#menuHandle',function() {

		var body = $('body');
		if ( !body.hasClass('menuOpen') ) {
			body.addClass('menuOpen')
		} 
		else {
			body.removeClass('menuOpen');
		}
		

	});

});