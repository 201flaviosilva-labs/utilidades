import randomNumber from "./randomNumber";

/**
 * Export a random rgba color (red, green, blue, alpha)
 * 
 * @example
 * randomRGBAColor() // 'rgba(73.67, 177.51, 5.37, 0.82158)'
 * randomRGBAColor() // 'rgba(187.17, 195.28, 28.24, 0.73586)'
 * 
 * @returns {string}
 */

export default function randomRGBAColor() { return `rgba(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)}, ${Math.random().toFixed(5)})`; }