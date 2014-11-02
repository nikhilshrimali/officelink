// Get DOM Elements
var textContent = document.getElementById('text-content');
var outputBox = document.getElementById('output-box');



function textToLinks(text) {
  var links =  text.split(" ");
  for (var i=0; i<=links.length-1; i++) {
    if ( isLink (links [i]) == false ) {
      links.splice (i, 1);
      i--;
    }
  }
  return links;
}


function isLink (str) {
  var value = false;
  if (str == "http") {
    value = true;
  }
  else if (str == "HTTP") {
    value = true;
  }
  return value;
}


document.addEventListener ("keyup", function () {
  console.log ("Links:" + textToLinks (textContent.value));
}, false);
