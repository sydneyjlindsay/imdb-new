$(document).ready(function() {

	var buildResultRow = _.template($('#movie-row').html());

	var bluePrint = Backbone.Router.extend({
		routes: {
			'': 'home',
			'home': 'home',
			'search/:query': 'search', 
			'search/new/:query': 'newSearch'
		}, 

		home: function() {
			console.log('home');
			$('.page').hide(); 
			$('#home').show();
			$('#list').hide();
		}, 

		search: function(query) {
			$('.page').hide();
			$('#search-results').show();
			$('#list').show();
			$.get(
			'http://www.omdbapi.com/', {s: query}, onReceivedMovies, 'json'
		);
			function onReceivedMovies(movies) {
				var newResults = movies.Search;

				var movieArray = []; 
				var watchList = [];

				// for(var i=0; i<movies.Search.length; i++) {
				// 	// var $movie = $('<div>'+movies.Search[i].Title+'</div>');
				// 	// movieArray.push($movie);
				// }

				for(var i=0; i<newResults.length; i++) {
					var movie = newResults[i];
					$('#movie-list').append(buildResultRow(movie));
				}

				// $('#movie-list').append(movieArray);

				for(var i=0; i<movie.length; i++) {
					$('.movie-row').on('click', function(e) {
						// watchList.push($(this));
						// update(watchList);
						console.log('success');
					});
				}
				function update(array) {
				$('#watch-list').html(array);
				for(var i=0; i<movieArray.length; i++) {
				}
			}
		};
	} 

		// newSearch: function(query) {
		// 	$('page').hide();
		// 	$('#search-results').show();
		// 	$('#list').show();
		// }
	});

	var myRouter = new bluePrint();
	Backbone.history.start();

	$('#search-form').on('submit', function(e) {
		e.preventDefault();
		var query = $('#movie-query').val();
		myRouter.navigate('search/'+query, {trigger: true});
		$('#movie-query').val('');
	});

	// $('#new-search-form').on('submit', function(e) {
	// 		e.preventDefault();
	// 		var query = $('#new-movie-query').val();
	// 		myRouter.navigate('search/new/'+query, {trigger: true});

	// 		var movieArray = []; 
	// 		var watchList = [];

	// 		function onReceivedMovies(movies) {
				
	// 			for(var i=0; i<movies.Search.length; i++) {
	// 				var $movie = $('<div>'+movies.Search[i].Title+'</div>');
	// 				movieArray.push($movie);
	// 			}

	// 			$('#movie-list').html(movieArray);

	// 			for(var i=0; i<movieArray.length; i++) {
	// 				movieArray[i].click(function(e) {
	// 					watchList.push($(this));
	// 					update(watchList);
	// 				});
	// 			}
	// 		};

	// 		$.get(
	// 			'http://www.omdbapi.com/', 
	// 			{s: query},
	// 			onReceivedMovies, 
	// 			'json'
	// 		);

	// 	function update(array) {
	// 		$('#watch-list').append(array);
	// 		for(var i=0; i<movieArray.length; i++) {
	// 		}
	// 	}
	// 	$('#new-movie-query').val('');
	// });
});



