

require.config({
    baseUrl: 'js/lib',
    paths: {
        jquery: 'jquery/jquery-2.1.0.min',
        handlebars: 'handlebars/handlebars-1.3.0'
    }
});

require(['modules/offcanvasMenu','modules/data','modules/activityLinks','handlebars'], function() {

	if ( $("#media-list").length > 0 ) {
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
	}

	if ( $("#blog-list").length > 0 ) {

		var data = {
			posts: [
				{title:'An Urgent Appeal',author:'Tom McClintock',date:'March 10, 2014',teaser:'I need your help like never before. Coordinating with the Democrats, a well-funded liberal coalition is testing a new strategy to silence conservatives in California.'},
				{title:'Committee Statement on HR 1192',author:'Tom McClintock',date:'February 26, 2014',teaser:'HR 1192 renames Mammoth Peak in Yosemite National Park in honor of Jesse Benton Freemont.'},
				{title:'Rim Fire Emergency Salvage',author:'Tom McClintock',date:'February 6, 2014',teaser:'Last August, the Rim Fire destroyed 400 square miles of timber in the Sierra Nevada. It left behind hundreds of millions of board feet of dead timber that can still be salvaged.'},
				{title:'HR 3964 - Sacramento-San Joaquin Valley Emergency Water Delivery Act',author:'Tom McClintock',date:'February 5, 2014',teaser:'California’s drought is NATURE’S fault. Our failure to prepare for it is OUR fault.'}
			]
		}

		var posts_source = $("#blog-list").html();
		var posts_template = Handlebars.compile(posts_source);
		
		$('.post-feed').append(posts_template(data));

	}

});
