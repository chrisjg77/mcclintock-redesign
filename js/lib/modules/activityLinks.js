define(['jquery'],function( $ ) {

	// Shorten jquery selectors
	var body = $('body');

	$(document).on('mouseover','.post-activity-item',function() {
		$('.post-activity-handle',this).addClass('active');
		$('.post-activity-dropdown',this).stop().fadeIn(500);

	});

	$(document).on('mouseout','.post-activity-item',function() {
		$('.post-activity-handle',this).removeClass('active');
		$('.post-activity-dropdown',this).stop().fadeOut(500);
	});

});