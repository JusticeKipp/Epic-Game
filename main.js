var i = 0;
var txt = 'Scooter'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function createListItem() {
   let node = document.createElement('li');
   node.appendChild(document.createTextNode('Scooter'));
   document.querySelector('ul').appendChild(node);
   txt = node.innerHTML;
}

function typeWriter() {
   if (i < txt.length) {
      document.getElementById("text").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
   }
}