import { House } from "./houses";
import Door from "./door";
import Window from "./window";
import Paint from "./paint";
import Cyling from "./cyling";

let eachHouse = new House();
console.log(eachHouse.check());// checked 

let door = new Door(eachHouse);
console.log(door.check());// checked 

let cyling = new Cyling(door);
console.log(cyling.check());// checked 

let window = new Window(cyling);
console.log(window.check());// need installation 

let paint = new Paint(window);
console.log(paint.check());//  order white colour


