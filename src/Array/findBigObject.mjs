/**
 * Returns the biggest element of a array of objects.
 * 
 * @example
 * const myArray = [{a:1, b:100}, {a: 0, b:50}, {a:0, b:200}]
 * findBigObject(myArray, "b"); // {a:0, b:200}
 * findBigObject(myArray, "a"); // {a:1, b:100}
 * findBigObject(myArray, "b", true); // 200
 * findBigObject(myArray, "a", true); // 1
 * 
 * @param {any[]} array - The array to search
 * @param {string} prop - The property to find the biggest element
 * @param {boolean} [returnOnlyValue=false] - If true only returns the value of the given property with the biggest value
 * @returns {any|number} - The biggest element in the array
 * 
 * @function findBigObject
 * @memberof Array
 */
export function findBigObject(array, prop, returnOnlyValue = false) {
	const biggest = Math.max(...array.map(o => o[prop]));
	return returnOnlyValue ? biggest : array.find((e) => e[prop] === biggest);
}

// -- Deprecated
/**
 * 
 * @param {Object[]} array - The array to search
 * @param {string} prop - The property to find the biggest element
 * @returns {Object} - The biggest element in the array
 * 
 * @function findBigObjectDeprecated
 * @memberof Array
 * @deprecated
 */
export function findBigObjectDeprecated(array, prop) {
	const propValues = array.map((e) => e[prop]); // Get a new array only the props
	const minPropValue = Math.max(...propValues); // Try to find the biggest value
	return array.find((e) => e[prop] === minPropValue); // Find the biggest in the array
}
