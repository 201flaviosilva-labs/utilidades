/**
 * Rounds a number to a specified maximum number of decimals.
 * 
 * @example roundNumber(10.5555); // 10.56
 * @example roundNumber(10.5555, 1); // 10.6
 * @example roundNumber(10); // 10
 * 
 * @param {number} num - The number to round.
 * @param {number} [maxOfDecimals=2] - The maximum number of decimals to round to. Defaults to 2 if not provided.
 * @returns {number} - The rounded number.
 * 
 * @throws {TypeError} - If the `num` parameter is not a number.
 * @throws {TypeError} - If the `maxOfDecimals` parameter is not a number.
 * @throws {RangeError} - If the `maxOfDecimals` parameter is less than 0
 * 
 * @function roundNumber
 * @memberof Maths
 */
export function roundNumber(num, maxOfDecimals = 2) {
	if (typeof num !== "number") throw new TypeError("The `num` parameter must be a number");
	if (typeof maxOfDecimals !== "number") throw new TypeError("The `maxOfDecimals` parameter must be a number");
	if (maxOfDecimals < 0) throw new RangeError("The `maxOfDecimals` parameter must be greater than or equal to 0");

	const numberOfDecimals = num.toString().indexOf(".") + 1;
	if (numberOfDecimals > 0 && num.toString().substring(numberOfDecimals).length > maxOfDecimals)
		return parseFloat(num.toFixed(maxOfDecimals));
	else return num;
}
