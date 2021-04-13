"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printWarning = exports.printInfo = exports.printError = void 0;
const chalk_1 = require("chalk");
const log = console.log;
const printError = (...msg) => {
    log(chalk_1.default.redBright(...msg));
};
exports.printError = printError;
const printInfo = (...msg) => {
    log(msg);
};
exports.printInfo = printInfo;
const printWarning = (...msg) => {
    log(chalk_1.default.yellowBright(...msg));
};
exports.printWarning = printWarning;
//# sourceMappingURL=print_utils.js.map