import { House } from "./houses";
import Door from "./door";
import Window from "./window";
import Paint from "./paint";
import Ceiling from "./ceiling";

let eachHouse = new House();
console.log(eachHouse.check());// checked 

let door = new Door(eachHouse);
console.log(door.check());// checked 

let ceiling = new Ceiling(door);
console.log(ceiling.check());// checked 

let window = new Window(ceiling);
console.log(window.check());// need installation 

let paint = new Paint(window);
console.log(paint.check());//  order white colour


