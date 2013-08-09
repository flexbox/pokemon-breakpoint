function gottaCatchThemAll(element){
  var media_query = document.getElementById(element);
  var css_prop = window.getComputedStyle(media_query,':after').getPropertyValue('content');
  return css_prop;
}

function pokeball(){
  var pokemon = gottaCatchThemAll('media-query--name');

  if (pokemon == '"salameche"') {
    alert("Je suis le pokemon " + pokemon + " correspondant à un smartphone");
  };

  if (pokemon == '"reptincel"') {
    alert("Je suis le pokemon " + pokemon + " correspondant à une tablette");
  };

  if (pokemon == '"dracaufeu"') {
    alert("Je suis le pokemon " + pokemon + " correspondant à un écran de bureau");
  };

  if (pokemon == '"dracaufeu_flame"') {
    alert("Je suis le pokemon " + pokemon + " et j'envoie plein de flammes car j'ai plein de place");
  };

  if (pokemon == '"dracaufeu_vol"') {
    alert("Je suis le pokemon " + pokemon + " et je m'envolle dans les air en format paysage");
  };
}
