var i = 0;
let txt = "";
var speed = 50; /* The speed/duration of the effect in milliseconds */
let paused = false;

function createListItem() {
	//checks if the id text exists and removes it
	if (document.getElementById("text") != undefined) {
		document.getElementById("text").removeAttribute("id");
	}
	//creates a new list item
	let node = document.createElement("li");
	//gives new list item the id of text
	node.setAttribute("id", "text");
	//defines variable txt as
	txt = "pi";
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
		document.getElementById("fight").style.display = "none";
		document.getElementById("move").style.display = "none";
		if (i < txt.length) {
			document.getElementById("text").innerHTML += txt.charAt(i);
			i++;
			setTimeout(typeWriter, speed);
		}
		if (i == txt.length) {
			document.getElementById("fight").style.display = "block";
			document.getElementById("move").style.display = "block";
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
