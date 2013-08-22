# Pokemon breakpoint

### Make a connection between your CSS and your Javascript

We have a problem in responsive design : We define breakpoints in CSS and maybe you have to use it in your Javascript.
Pokemon breakpoint is a fun way to make the connection between the 2 worlds.

## One rule to catch them all
Your naming is a crutial for your application.
In this exemple we are going to associate media queries defined in `stylesheets/foundation/_settings.scss` with your javascript files.

    $small-screen: 641px !default;
    $medium-screen: 1280px !default;
    $large-screen: 1440px !default;

Now we must find a good naming for the id `#media-query--name`.
For exemple you can take the 3 states of a random pokemon.
In `stylesheets/_breakpoint.scss` remplace `#media-query--name:after` by your new explicit naming

    @media #{$small} {
      #media-query--name:after{
        content: "reptincel";
      }
    }

## How it works ?
```js
// You create a new PokeBreak instance and pass the element id to the constructor
//  (`#media-query--name` here).
var pkBrk = new PokeBreak('media-query--name');
// Than, you can read the current state
console.log('Current state is '+pkBrk.pokeball()+'.');
// Or you can listen to state changes
pkBrk.listen(function(oldPokemon, newPokemon) {
	console.log('Just switched from '+oldPokemon+' to '+newPokemon+'.');
});

You can listen to different break point groups by creating many PokeBreak instances.
```

## Tutorial

- Read the [associated blog post](http://blog.davidleuliette.com)
- Ding into code and read `stylesheets/pokemon.scss`

## Contribute

This is Github folks!

If you find a *bug*, open an [Issue](https://github.com/flexbox/pokemon-breakpoint/issues).

You can also make a Pull Request, I *always* respond, and try to do it fast.
