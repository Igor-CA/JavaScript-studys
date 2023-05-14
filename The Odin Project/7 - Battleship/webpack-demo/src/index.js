import DOMHandler from "./DOMevents";
import gamingLoop from "./gamingLoop";
import IA from "./IA";
import './style.css';

DOMHandler.startGameInput.addEventListener('click', () => {
    if(DOMHandler.playerNameInput.value){
        DOMHandler.changeToGameScreen()
        gamingLoop.startGame(DOMHandler.playerNameInput.value)
        DOMHandler.playerNameInput.value = null
    }else{
        DOMHandler.playerNameInput.placeholder = 'Name is necessarry'
        DOMHandler.playerNameInput.focus()
    }
})
