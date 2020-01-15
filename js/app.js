/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 let game   ;
 const resetDisplay = () => {
     const overlay = document.querySelector("#overlay");
     overlay.style.display ="none";
     overlay.className = "start"
 }

 const markButton = letter => {												//marks the received key
	letter.disabled = true;
	letter.className += ` chosen`;
}

 

 const keyEvent = e => {
     if(/^[a-zA-Z]$/.test(e.key)){
         document.querySelectorAll('.key').forEach(button => {
             
             if(button.textContent == e.key && !button.disabled){
                 game.handleInteraction(e.key);
                 markButton(button)
                 return;
             }
         })
     }
 }

 document.querySelector(`#btn__reset`).addEventListener(`click`, () => {		//when the user presses the start or try again button, a new game is created,
	resetDisplay();															//the overlay is hidden and starts the game
	game = new Game();
	game.startGame();
});
document.querySelector(`#qwerty`).addEventListener(`click`, e => {			//on screen key event listener, marks the key on screen and 
	if (e.target.tagName === `BUTTON`){										//handles the interaction
		markButton(e.target);
		game.handleInteraction(e.target.textContent);
	}
});
