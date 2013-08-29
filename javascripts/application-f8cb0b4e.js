/*
 * Copyright (C) 2013 David Leuliette, Nicolas Froidure
 *
 * This file is free software;
 * you can redistribute it and/or modify it under the terms of the GNU
 * General Public License (GPL) as published by the Free Software
 * Foundation, in version 3. It is distributed in the
 * hope that it will be useful, but WITHOUT ANY WARRANTY of any kind.
 *
 */
!function(e,n){n([],function(){function e(n){if(!this instanceof e)throw Error("New operator missing");var t=document.getElementById(n),o=null,r=this;return this.pokeball=function(){return o=window.getComputedStyle(t,":after").getPropertyValue("content")},this.listen=function(e){window.onresize=function(n){return function(t){var i=o,a=r.pokeball();o=a,a!==i&&e(i,a,t),"function"==typeof n&&n(t)}}(window.onresize)},curPokemon=this.pokeball(),this}return e})}(this,"function"==typeof define&&define.amd?define:function(e,n,t){var o=this;"object"==typeof e&&(t=n,n=e),this.PokeBreak=t.apply(this,n.map(function(e){return o[e.substring(e.lastIndexOf("/")+1)]}))}.bind(this));var pokeball=function(){var e=new PokeBreak("media-query--name");return e.listen(function(e,n){console.log("Just switched from "+e+" to "+n+".")}),function(){var n=e.pokeball();"salameche"==n&&alert("Je suis le pokemon "+n+" correspondant à un smartphone"),"reptincel"==n&&alert("Je suis le pokemon "+n+" correspondant à une tablette"),"dracaufeu"==n&&alert("Je suis le pokemon "+n+" correspondant à un écran de bureau"),"dracaufeu_flame"==n&&alert("Je suis le pokemon "+n+" et j'envoie plein de flammes car j'ai plein de place"),"dracaufeu_vol"==n&&alert("Je suis le pokemon "+n+" et je m'envolle dans les air en format paysage")}}();