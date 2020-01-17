
 class Game {
     constructor(){
         this.missed = 0;
         this.phrases = [
            new Phrase(`hey`),
			new Phrase(`you win`),
			new Phrase(`put back my english word`),
			new Phrase(`boyfriends`),
			new Phrase(`campground`),
			new Phrase(`importance`),
			new Phrase(`trampoline`),
			new Phrase(`blacksmith`),
			new Phrase(`binoculars`),
			new Phrase(`background`)
         ]
         this.activePhrase = null
     }
    getRandomPhrase(){
        return this.currentPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)]
        
     }
    handleInteraction(letter){
         if(this.currentPhrase.checkLetter(letter)){
             this.currentPhrase.showMatchedLetter(letter)
             this.checkForWin()
            

         }
         else this.removeLife()

        //  if(!this.currentPhrase.checkLetter(letter)){
        //      letter.className += "wrong"
        //  }
         const markButton = letter => {
             console.log(letter)
            letter.disabled = true;
            letter.className += "wrong"
        }

 
     }
    removeLife(){
         this.missed++;
         const live = document.querySelector(`img[src *= live]`);
         if(this.missed < 5) {
            live.src = `images/lostHeart.png`;
        }
        else 
            this.gameOver(false)
     }
    checkForWin(){
            if(!document.querySelector(`.hide.letter`))
                this.gameOver(true)
     }

    gameOver(win){
            document.querySelector("#btn__reset").textContent = "try again";
          const overlay = document.querySelector("#overlay");
          const messageElement = document.querySelector(`#game-over-message`);
		overlay.style.display = `flex`;
		if (win){
			messageElement.textContent = `you win!`;
			overlay.className += ` win`;
		} else{
			messageElement.textContent = `you failed`;
			overlay.className += ` lose`;
		}
		document.removeEventListener(`keydown`, keyEvent);
	 }
	startGame(){																						//sets the ramdom phrase, resets the lives and keys,
       
        this.activePhrase = this.getRandomPhrase()														//adds the keyboard event listener
		this.activePhrase.addPhraseToDisplay();
		document.querySelector(`#game-over-message`).textContent = ``;
		document.querySelectorAll(`img[src*=lost]`).forEach(live => live.src = `images/liveHeart.png`);
		document.addEventListener(`keydown`, keyEvent);
		document.querySelectorAll(`button[disabled]`).forEach(button => {
			button.disabled = false;
			button.className = `key`;
		});
	 }
        
     }
