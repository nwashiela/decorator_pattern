"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const houses_1 = require("../houses");
const cyling_1 = __importDefault(require("../cyling"));
const window_1 = __importDefault(require("../window"));
const paint_1 = __importDefault(require("../paint"));
describe('My function', function () {
    it('should test', function () {
        assert_1.default.equal(2, 2);
    });
    it("should return checked ", () => {
        let eachHouse = new houses_1.House();
        let actual = eachHouse.check();
        let expected = "checked";
        assert_1.default.strictEqual(actual, expected);
    });
    it("should return cheked if door is done ", () => {
        let eachHouse = new houses_1.House();
        let cyling = new cyling_1.default(eachHouse);
        let actual = cyling.check();
        let expected = "checked";
        assert_1.default.strictEqual(actual, expected);
        console.log(expected);
    });
    it("should return need installation, if there is a shortage ", () => {
        let eachHouse = new houses_1.House();
        let windows = new window_1.default(eachHouse);
        let actual = windows.check();
        let expected = "need installation ";
        assert_1.default.strictEqual(actual, expected);
        console.log(actual);
    });
    it("should return for all ", () => {
        let eachHouse = new houses_1.House();
        let paint = new paint_1.default(eachHouse);
        let actual = paint.check();
        let expected = "order white colour";
        assert_1.default.strictEqual(actual, expected);
        console.log(expected);
    });
});
