

require.config({
    baseUrl: 'js/lib',
    paths: {
        jquery: 'jquery/jquery-2.1.0.min',
        handlebars: 'handlebars/handlebars-1.3.0'
    }
});

require(['modules/offcanvasMenu','modules/data','handlebars'], function() {

	var data = {
		media: [
 			{type:'audio',icon:'fa-volume-up',title:'A free market depends on everyone having equal access',date:'February 27, 2014'},
 			{type:'audio',icon:'fa-volume-up',title:'Administration\'s treatment of journalists "absolutely chilling"',date:'February 27, 2014'},
 			{type:'video',icon:'fa-video-camera',title:'California Water: It\'s the Storage"',date:'February 25, 2014'},
 			{type:'audio',icon:'fa-volume-up',title:'Administration holds First Amendment, free speech in contempt"',date:'February 23, 2014'},
 			{type:'video',icon:'fa-video-camera',title:'The Great Question',date:'February 23, 2014'},
 			{type:'video',icon:'fa-video-camera',title:'Time Running Out for the Sierras',date:'February 22, 2014'},
 			{type:'audio',icon:'fa-volume-up',title:'Obama administration doubling down on out of control policies',date:'February 20, 2014'},
 			{type:'video',icon:'fa-video-camera',title:'Tom McClintock Debates Obamacare',date:'September 15, 2013'}
		]
	}

	var media_source = $("#media-list").html();
	var media_template = Handlebars.compile(media_source);
	
	$('.feed').html(media_template(data));


});
