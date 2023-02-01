/**
 * Returns a array with the dived evenly between the two numbers
 * 
 * @example divideEvenly(); // [0, 2.5, 5, 7.5, 10]
 * @example divideEvenly(0, 10, 2); // [0, 10]
 * @example divideEvenly(-45, 45, 3); // [-45, 0, 45]
 * 
 * @param {number} [min=0] The minimum value to return.
 * @param {number} [max=10] The maximum value to return.
 * @param {number} [numberDivisions=5] The number of divisions to use.
 * @returns {number[]} An array of evenly spaced numbers.
 * 
 * @function divideEvenly
 * @memberof Maths
 */
export function divideEvenly(min = 0, max = 10, numberDivisions = 5) {
	const result = [];
	const step = (max - min) / (numberDivisions - 1);
	for (let i = 0; i < numberDivisions; i++) {
		result.push(min + (step * i));
	}
	return result;
}

/**
 * Returns a array of numbers with the spaced divisions. The division starts on 0
 * 
 * @example divideEvenlyWithSpread(10, 5); // [-5, -3.888888888888889, -2.7777777777777777, -1.6666666666666665, -0.5555555555555554, 0.5555555555555554, 1.666666666666667, 2.7777777777777777, 3.8888888888888893, 5]
 * 
 * @param {number} [numberDivisions=3] - number of number to divide
 * @param {number} [spread=5] - space between 0 and the last number
 * @returns {number[]} An array of evenly spaced numbers.
 */
export function divideEvenlyWithSpread(numberDivisions = 3, spread = 5) {
	if (numberDivisions <= 1) return [0];

	const result = [];

	for (let i = 0; i < numberDivisions; i++) {
		result.push(-spread + i * (2 * spread) / (numberDivisions - 1));
	}

	return result;
}
