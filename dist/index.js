"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const houses_1 = require("./houses");
const door_1 = __importDefault(require("./door"));
const window_1 = __importDefault(require("./window"));
const paint_1 = __importDefault(require("./paint"));
const cyling_1 = __importDefault(require("./cyling"));
let eachHouse = new houses_1.House();
console.log(eachHouse.check()); // checked 
let door = new door_1.default(eachHouse);
console.log(door.check()); // checked 
let cyling = new cyling_1.default(door);
console.log(cyling.check()); // checked 
let window = new window_1.default(cyling);
console.log(window.check()); // need installation 
let paint = new paint_1.default(window);
console.log(paint.check()); //  order white colour
