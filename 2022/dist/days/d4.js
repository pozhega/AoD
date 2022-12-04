"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runPart2 = exports.runPart1 = void 0;
const fs = __importStar(require("fs"));
const assert_1 = __importDefault(require("assert"));
// -----------------------------------------------------------------------------
// PRIVATE
//------------------------------------------------------------------------------
const parseInput = (path) => {
    return fs.readFileSync(path, 'utf-8')
        .split('\n')
        .filter(line => line !== '')
        .map(line => line
        .split(',')
        .map(section => section
        .split('-')
        .map(val => parseInt(val))));
};
const part1 = (pairs) => {
    return pairs.reduce((count, [section1, section2]) => {
        let [s1From, s1To] = section1;
        let [s2From, s2To] = section2;
        if (s1From >= s2From && s1To <= s2To)
            return count += 1;
        if (s2From >= s1From && s2To <= s1To)
            return count += 1;
        return count;
    }, 0);
};
const part2 = (pairs) => {
    return pairs.reduce((count, [section1, section2]) => {
        let [s1From, s1To] = section1;
        let [s2From, s2To] = section2;
        if (s1To >= s2From && s2To >= s1To)
            return count += 1;
        if (s2To >= s1From && s1To >= s2To)
            return count += 1;
        return count;
    }, 0);
};
// -----------------------------------------------------------------------------
// EXPORTS
//------------------------------------------------------------------------------
const inputPath = './src/inputs/d4.txt';
const inputTestPath1 = './src/inputs/d4-t1.txt';
const runPart1 = () => {
    (0, assert_1.default)(part1(parseInput(inputTestPath1)) === 2);
    console.time('Time');
    console.log('Part 1: ', part1(parseInput(inputPath)));
    console.timeEnd('Time');
};
exports.runPart1 = runPart1;
const runPart2 = () => {
    (0, assert_1.default)(part2(parseInput(inputTestPath1)) === 4);
    console.time('Time');
    console.log('Part 2: ', part2(parseInput(inputPath)));
    console.timeEnd('Time');
};
exports.runPart2 = runPart2;
