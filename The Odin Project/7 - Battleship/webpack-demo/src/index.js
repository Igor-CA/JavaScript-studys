import DOMHandler from "./DOMevents";
import boardPlacementScreen from "./boardPlacementScreen";
import gamingLoop from "./gamingLoop";
import './style.css';

DOMHandler.startGameInput.addEventListener('click', () => {
    if(DOMHandler.playerNameInput.value){
        DOMHandler.changeToBoardScreen()
        boardPlacementScreen.start()
    }else{
        DOMHandler.playerNameInput.placeholder = 'Name is necessarry'
        DOMHandler.playerNameInput.focus()
    }
})
/*
if(DOMHandler.playerNameInput.value){
        DOMHandler.changeToGameScreen()
    }else{
        DOMHandler.playerNameInput.placeholder = 'Name is necessarry'
        DOMHandler.playerNameInput.focus()
    }
*/