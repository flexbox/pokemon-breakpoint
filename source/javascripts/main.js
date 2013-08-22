/*
 * Copyright (C) 2012 David Leuliette, Nicolas Froidure
 *
 * This file is free software;
 * you can redistribute it and/or modify it under the terms of the GNU
 * General Public License (GPL) as published by the Free Software
 * Foundation, in version 3. It is distributed in the
 * hope that it will be useful, but WITHOUT ANY WARRANTY of any kind.
 *
 */

// AMD + global : You can use this object by inserting a script
// or using an AMD loader (like RequireJS)
(function(root,define){ define([], function() {
// START: Module logic start

	// Constructor
	function PokeBreak(elementId) {

		// Check new
		if(!this instanceof PokeBreak) {
			throw Error('New operator missing');
		}

		// Private vars
		var _mediaQuery = document.getElementById(elementId)
			, _curPokemon = null
			, that=this;
		
		// Methods
		this.pokeball = function() {
			return _curPokemon=window.getComputedStyle(_mediaQuery,':after').getPropertyValue('content');
		};

		this.listen = function(callback) {
			window.onresize=(function(oldResize) {
				return function(e) {
					var oldPk=_curPokemon
						, newPk=that.pokeball();
					_curPokemon=newPk;
					if(newPk!==oldPk) {
						callback(oldPk,newPk, e);
					}
					('function' === typeof oldResize)&&oldResize(e);
				};
			})(window.onresize);
		};

		curPokemon=this.pokeball();
		
		return this;
	}

// END: Module logic end

	return PokeBreak;

});})(this,typeof define === 'function' && define.amd ?
	// AMD
	define :
	// Global
	function (name, deps, factory) {
		var root=this;
		if(typeof name === 'object') {
			factory=deps; deps=name;
		}
		this.PokeBreak=factory.apply(this, deps.map(function(dep){
			return root[dep.substring(dep.lastIndexOf('/')+1)];
		}));
	}.bind(this)
);
