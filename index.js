const htmlButton = document.querySelector('button');
var euDevoServirConteudoTouch = Modernizr.touch;

if(euDevoServirConteudoTouch){
  htmlButton.classList.add('mobile-button');
};