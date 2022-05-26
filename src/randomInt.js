import { randomFloat } from "./randomFloat";

/**
 * Return a random integer number between the given values and the given precision
 * 
 * @example
 * randomInt(0, 1);
 * randomInt(-10, 0);
 * randomInt(-550, 444);
 * 
 * @param {number} min - min value
 * @param {number} max - max value
 * @returns {number} - random integer number
 */
export default function randomInt(min, max) { return Math.floor(randomFloat(min, max)); };