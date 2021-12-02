var i = 0;
let txt = ''; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function createListItem() {
   //checks if the id text exists and removes it 
   if (document.getElementById('text') != undefined) {
      document.getElementById('text').removeAttribute('id');
   }
   //creates a new list item
   let node = document.createElement('li');
   //gives new list item the id of text
   node.setAttribute('id', "text")
   //defines variable txt as 
   txt = "pizza";
   //adds the list item to the ul tag
   // node.appendChild(document.createTextNode(txt));
   document.querySelector('ul').appendChild(node);

   i = 0;

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
let gameMusic = new Audio("Guitar-Gentle.mp3");
gameMusic.loop = true;
function Sound() {
   introSound.play();
   gameMusic.play();
   document.getElementById("startingPage").style.display = "none";
   document.getElementById("page2").style.display = "flex";
}

function Intro() {
   document.getElementById("page2").style.display = "none";
   document.getElementById("StoryBox").style.display = "flex";
   document.getElementById("PlayBox").style.display = "flex";
}