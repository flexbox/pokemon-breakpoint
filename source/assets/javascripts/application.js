//= require pokebreak.js

var pokeball = (function () {
  var pkBrk = new PokeBreak('media-query--name');

	// Listening for changes
	pkBrk.listen(function(oldPokemon, newPokemon) {
		console.log('Just switched from '+oldPokemon+' to '+newPokemon+'.');
	});

	// Helper to read cur state
	return function() {

		var pokemon=pkBrk.pokeball();

		if (pokemon == 'salameche') {
		  alert("Je suis le pokemon " + pokemon + " correspondant à un smartphone");
		};

		if (pokemon == 'reptincel') {
		  alert("Je suis le pokemon " + pokemon + " correspondant à une tablette");
		};

		if (pokemon == 'dracaufeu') {
		  alert("Je suis le pokemon " + pokemon + " correspondant à un écran de bureau");
		};

		if (pokemon == 'dracaufeu_flame') {
		  alert("Je suis le pokemon " + pokemon + " et j'envoie plein de flammes car j'ai plein de place");
		};

		if (pokemon == 'dracaufeu_vol') {
		  alert("Je suis le pokemon " + pokemon + " et je m'envolle dans les air en format paysage");
		};

	};

})();
