if (!NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

var slice = [].slice;

var ciu         = document.querySelector('.ciu_embed');
var btn         = document.querySelector('.toggle-caniuse');
var figcaptions = document.querySelectorAll('figcaption');

btn.addEventListener('click', function(){
  if ( ciu.hasAttribute('hidden') ) {
    ciu.removeAttribute('hidden');
    btn.textContent = btn.textContent.replace('켜기', '끄기');
  } else {
    ciu.setAttribute('hidden', true);
    btn.textContent = btn.textContent.replace('끄기', '켜기');
  }
});

figcaptions.forEach(function(caption, index){
  var img = caption.nextElementSibling;
  var l = figcaptions.length - 1;
  caption.style.cursor = 'pointer';
  caption.addEventListener('click', function(){
    var prevs = slice.call(figcaptions, 0, index);
    if ( img.hasAttribute('hidden') ) {
      img.removeAttribute('hidden');
      prevs.forEach(function(prev){ prev.setAttribute('hidden', true); });
    } else {
      img.setAttribute('hidden', true);
      prevs.forEach(function(prev){ prev.removeAttribute('hidden'); });
    }
  });
});