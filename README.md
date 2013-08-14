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
1. Identify the amazing fire colored `#media-query--name` element.
2. The javascript function `gottaCatchThemAll(element)` extract the naming ...
3. ... defined in the `pokeball()`function.

## Tutorial

- Read the [associated blog post](http://blog.davidleuliette.com)
- Ding into code and read `stylesheets/pokemon.scss`

## Contribute

This is Github folks!

If you find a *bug*, open an [Issue](https://github.com/flexbox/pokemon-breakpoint/issues).

You can also make a Pull Request, I *always* respond, and try to do it fast.
