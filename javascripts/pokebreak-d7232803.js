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
!function(n,t){t([],function(){function n(t){if(!this instanceof n)throw Error("New operator missing");var e=document.getElementById(t),i=null,o=this;return this.pokeball=function(){return i=window.getComputedStyle(e,":after").getPropertyValue("content")},this.listen=function(n){window.onresize=function(t){return function(e){var r=i,u=o.pokeball();i=u,u!==r&&n(r,u,e),"function"==typeof t&&t(e)}}(window.onresize)},curPokemon=this.pokeball(),this}return n})}(this,"function"==typeof define&&define.amd?define:function(n,t,e){var i=this;"object"==typeof n&&(e=t,t=n),this.PokeBreak=e.apply(this,t.map(function(n){return i[n.substring(n.lastIndexOf("/")+1)]}))}.bind(this));