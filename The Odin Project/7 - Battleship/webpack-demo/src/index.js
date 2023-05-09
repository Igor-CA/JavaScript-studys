import Player from "./Player";
import './style.css';

let player = Player('Person')
let pc = Player()

player.PlayerBoard.placeShip(5 ,0 , 'x')
player.PlayerBoard.placeShip(4 ,10 , 'x')
player.PlayerBoard.placeShip(3 ,30 , 'x')
player.PlayerBoard.placeShip(3 ,50 , 'x')
player.PlayerBoard.placeShip(2 ,80 , 'x')

pc.PlayerBoard.placeShip(5 ,7 , 'y')
pc.PlayerBoard.placeShip(4 ,11 , 'y')
pc.PlayerBoard.placeShip(3 ,33 , 'y')
pc.PlayerBoard.placeShip(3 ,40 , 'y')
pc.PlayerBoard.placeShip(2 ,55 , 'y')
