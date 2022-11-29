import assert from 'assert';
import {House} from "../houses"

import Cyling from "../cyling"
import Window from "../window"
import Paint from "../paint"

describe('My function', function() {
    it('should test', function() {
        assert.equal(2, 2);
    });

    it("should return checked ", () => {
        let eachHouse = new House();

        let actual: string = eachHouse.check();
        let expected: string = "checked";

        assert.strictEqual(actual, expected)
    })

    it("should return cheked if door is done ", () => {
        let eachHouse = new House();
        let cyling = new Cyling(eachHouse);
        
        let actual: string = cyling.check();
        let expected: string = "checked";
        assert.strictEqual(actual, expected)
        console.log(expected)

    })

    it("should return need installation, if there is a shortage ", () => {
        let eachHouse = new House();
        let windows = new Window(eachHouse);
        
        let actual: string = windows.check();
        let expected: string = "need installation ";
        
        assert.strictEqual(actual, expected)
        console.log( actual)


    })

    it("should return for all ", () => {
        let eachHouse = new House();
        let paint = new Paint(eachHouse)
        
        let actual: string = paint.check();
        let expected: string = "order white colour";
        
        assert.strictEqual(actual, expected)
        console.log(expected)


    })

});