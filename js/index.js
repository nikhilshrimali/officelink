function copyText() {
  var output = document.getElementById('linkarea').value;
   document.getElementById('slider').innerHTML = output;
   console.log (output);
 }

document.addEventListener ("keyup", function () {
  copyText ();
}, false);
