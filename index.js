var numberofdrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofdrum; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

      });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);
  buttonAnimation(event.key);



});




function makeSound(key) {
    	switch(key){
    		case "w":
    			audio=new Audio("/Users/anupamraj/Downloads/moonlight-films-main/s03/Drum Kit Starting Files/sounds/crash.mp3");
    			audio.play();
    		break;
    		case "a":
    			audio=new Audio("/Users/anupamraj/Downloads/moonlight-films-main/s03/Drum Kit Starting Files/sounds/kick-bass.mp3");
    			audio.play();
    		break;
    		case "s":
    			audio=new Audio("/Users/anupamraj/Downloads/moonlight-films-main/s03/Drum Kit Starting Files/sounds/snare.mp3");
    			audio.play();
    		break;
    		case "d":
    			audio=new Audio("/Users/anupamraj/Downloads/moonlight-films-main/s03/Drum Kit Starting Files/sounds/tom-1.mp3");
    			audio.play();
    		break;
    		case "j":
    			audio=new Audio("/Users/anupamraj/Downloads/moonlight-films-main/s03/Drum Kit Starting Files/sounds/tom-2.mp3");
    			audio.play();
    		break;
    		case "k":
    			audio=new Audio("/Users/anupamraj/Downloads/moonlight-films-main/s03/Drum Kit Starting Files/sounds/tom-3.mp3");
    			audio.play();
    		break;
    		case "l":
    			audio=new Audio("/Users/anupamraj/Downloads/moonlight-films-main/s03/Drum Kit Starting Files/sounds/tom-4.mp3");
    			audio.play();
    		break;
    		default: console.log(key);


    	}
        }
 
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 300);

}

