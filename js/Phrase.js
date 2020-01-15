/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
	constructor(phrase){
		this.phrase = phrase;
	}
	addPhraseToDisplay(){																					//removes the previous phrase and
		const phraseUl = document.querySelector(`#phrase ul`);												//creates each letter block for display
		document.querySelectorAll(`.letter, .space`).forEach(letter => phraseUl.removeChild(letter));
		for (let i = 0; i < this.phrase.length; i++) {
			const placeHolder = document.createElement(`li`);
			placeHolder.className = (this.phrase[i] === ` `)? `hide space`: `hide letter ${this.phrase[i]}`;
			placeHolder.textContent = this.phrase[i];
			phraseUl.appendChild(placeHolder);
		}
	}
	checkLetter(letter){																					//returns whether the received letter can be found 
		return !(this.phrase.indexOf(letter) == -1);														//in the phrase
	}
	showMatchedLetter(letter){																				//shows the received in the phrase display
		const letterLi = document.querySelector(`.hide.${letter}`);
		letterLi.className = `show letter ${letter}`;
	}
}
