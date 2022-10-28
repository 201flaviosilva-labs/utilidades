/**
 * Returns the lowest element from array of objects
 * 
 * @example
 * const myArray = [{a:1, b:100}, {a:10, b:50}, {a:0, b:200}]
 * findLowObject(myArray, "b"); // {a:10, b:50}
 * findLowObject(myArray, "a"); // {a:0, b:200}
 * findLowObject(myArray, "b", true); // 50
 * findLowObject(myArray, "a", true); // 0
 * 
 * @param {Object[]} array - The array to search
 * @param {string} prop - The property to find the lowest element
 * @param {boolean} [returnOnlyValue=false] - If true only returns the value of the given property with the lowest value
 * @returns {Object} - The lowest element in the array
 * 
 * @function findLowObject
 * @memberof Array
 */

export function findLowObject(array, prop, returnOnlyValue = false) {
	const lowest = Math.min(...array.map(o => o[prop]));
	return returnOnlyValue ? lowest : array.find((e) => e[prop] === lowest);
}

// -- Deprecated
/**
 * 
 * @param {Object[]} array - The array to search
 * @param {string} prop - The property to find the lowest element
 * @returns {Object} - The lowest element in the array
 * 
 * @function findLowObjectDeprecated
 * @memberof Array
 * @deprecated
 */
export function findLowObjectDeprecated(array, prop) {
	const propValues = array.map((e) => e[prop]); // Get a new array only the props
	const minPropValue = Math.min(...propValues); // Try to find the lowest value
	return array.find((e) => e[prop] === minPropValue); // Find the lowest in the array
}
