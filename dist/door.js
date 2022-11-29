"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Door {
    constructor(houseReport) {
        this.houseReport = houseReport;
    }
    check() {
        return this.houseReport.check();
    }
}
exports.default = Door;
