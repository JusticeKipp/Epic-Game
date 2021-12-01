var i = 0;
let txt = ''; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function createListItem() {
   // if (document.querySelector('div').removeAttribute('id') != null) {
   // document.querySelector('li').removeAttribute('id');
   // }
   let node = document.createElement('li');
   node.setAttribute('id', "text")
   node.appendChild(document.createTextNode(''));
   document.querySelector('ul').appendChild(node);
   txt = "pizza";

   function typeWriter() {
      if (i < txt.length) {
         document.getElementById("text").innerHTML += txt.charAt(i);
         i++;
         setTimeout(typeWriter, speed);
      }
   }
   typeWriter();
}

// function typeWriter() {
// }
let introSound = new Audio("voicebooking-speech.mp3");
let gameMusic = new Audio("Game-Menu_Looping.mp3")
gameMusic.loop = true;
function Sound() {
   // introSound.play();
   // gameMusic.play();
   document.getElementById("startingPage").style.display = "none";
   document.getElementById("PlayBox").style.display = "flex";
   document.getElementById("StoryBox").style.display = "flex";
}