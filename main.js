var i = 0;
let txt = "";
var speed = 50; /* The speed/duration of the effect in milliseconds */
let paused = false;

//an array containing all the story lines and their corresponding buttons
var storyArray = [
	{
		text: "You approach a giant bear. What do you do?",
		btn1: "Attack",
		btn2: "Run",
		donetext: "You fought the bear with ease"
	}
];

function createListItem() {
	//checks if the id text exists and removes it
	if (document.getElementById("text") != undefined) {
		document.getElementById("text").removeAttribute("id");
	}
	//creates a new list item
	let node = document.createElement("li");
	//gives new list item the id of text
	node.setAttribute("id", "text");
	//defines variable txt
	var randomItem = storyArray[Math.floor(Math.random()*storyArray.length)];
	txt = randomItem.text
	//adds the list item to the ul tag
	document.querySelector("ul").appendChild(node);

	//checks the length of the list and removes the top item if the length is 20 or more
	if (
		document.getElementById("textList").getElementsByTagName("li").length >= 20
	) {
		let removedItem = document.getElementById("textList").firstElementChild;
		removedItem.remove();
	}

	i = 0;

	//function for making the typing effect of text
	function typeWriter() {
		document.getElementById("btn1").style.display = "none";
		document.getElementById("btn2").style.display = "none";
		if (i < txt.length) {
			document.getElementById("text").innerHTML += txt.charAt(i);
			i++;
			setTimeout(typeWriter, speed);
		}
		if (i == txt.length) {
			document.getElementById("btn1").innerHTML = randomItem.btn1
			document.getElementById("btn2").innerHTML = randomItem.btn2
			document.getElementById("btn1").style.display = "block";
			document.getElementById("btn2").style.display = "block";
		}
	}
	typeWriter();
}

let introSound = new Audio("voicebooking-speech.mp3");
let gameMusic = new Audio("Guitar-Gentle.mp3");
gameMusic.loop = true;

//starts music and goes to the plot line screen
function Sound() {
	introSound.play();
	gameMusic.play();
	document.getElementById("startingPage").style.display = "none";
	document.getElementById("page2").style.display = "flex";
	document.getElementById("sound").style.display = "inline";
}

//goes to the play screen
function Intro() {
	document.getElementById("page2").style.display = "none";
	document.getElementById("StoryBox").style.display = "flex";
	document.getElementById("PlayBox").style.display = "flex";
}

//Mute button function
function muteMusic() {
	if (paused == true) {
		gameMusic.play();
		document.getElementById("soundButton").innerHTML =
			"<ion-icon title='Mute' name='volume-high-outline'></ion-icon>";
		paused = false;
	} else {
		gameMusic.pause();
		document.getElementById("soundButton").innerHTML =
			'<ion-icon title="Unmute" name="volume-mute-outline"></ion-icon>';
		paused = true;
	}
}
