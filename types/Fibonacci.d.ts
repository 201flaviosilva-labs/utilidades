/**
 * Runs the fibonacci sequence for the given times
 *
 * @see {@link https://pt.wikipedia.org/wiki/Sequ%C3%AAncia_de_Fibonacci}
 *
 * @example fibonacci(2); // [0,1]
 * @example fibonacci(5); // [0,1,1,2,3]
 * @example fibonacci(10); // [0,1,1,2,3,5,8,13,21,34]
 *
 * @param {number} times - number of times to run
 * @returns {number[]}
 */
export function fibonacciSequence(times?: number): number[];
/**
 * Runs the fibonacci sequence until the maximum given number
 *
 * @example fibonacciUntil(2); // [0,1,1]
 * @example fibonacciUntil(5); // [0,1,1,2,3]
 * @example fibonacciUntil(100); // [0,1,1,2,3,5,8,13,21,34,55,89]
 *
 * @param {number} max - max number to get
 * @returns {number[]}
 */
export function fibonacciUntil(max?: number): number[];
/**
 * Create a fibonacci sequence starts and end with a given values
 *
 * @example fibonacciCustomSequence(5, 20); // [5,10,15,25]
 * @example fibonacciCustomSequence(10, 120); // [10,20,30,50,80,130]
 * @example fibonacciCustomSequence(50); // [50,100,150]
 *
 * @param {number} start - number to start the sequence
 * @param {number} end - max number to stop
 * @returns {number[]}
 */
export function fibonacciCustomSequence(start?: number, end?: number): number[];
/**
 * A other way to solve the fibonacci sequence, with recursion.
 *
 * @example recursiveFibonacci(5); // 5
 * @example recursiveFibonacci(8); // 21
 * @example recursiveFibonacci(10); // 55
 *
 * @param {number} terms - number of terms
 * @returns {number}
 */
export function recursiveFibonacci(terms?: number): number;
/**
 * @class Fibonacci
 * @classdesc
 * A algorithm to work fibonacci.
 *
 * Example: {@link https://codesandbox.io/s/201flaviosilva-utils-fibonacci-cnbxyv}
 * @see {@link https://pt.wikipedia.org/wiki/Sequ%C3%AAncia_de_Fibonacci}
 *
 * @example new Fibonacci();
 * @example
 *	import { Fibonacci } from "201flaviosilva-utils";
 *	const f = new Fibonacci();
 *	for (i = 0; i < 10; i++) console.log(f.next()); // 1,2,3,5,8,13,21,34,55,89
 *	for (i = 0; i < 5; i++) console.log(f.before()); // 55,34,21,13,8
 *
 * @constructor
 */
export class Fibonacci {
    /**
     * Used as helper value to calculate the next number.
     *
     * Used to save the last valeu
     *
     * @type {number}
     * @private
     */
    private _lastNumber;
    /**
     * Used as helper value to calculate the next number.
     *
     * Used to save the next valeu
     *
     * @type {number[]}
     * @private
     */
    private _currentNumber;
    /**
     * Contains the current state of the sequence
     *
     * @type {number[]}
     */
    sequence: number[];
    /**
     * Return the next number in the fibonacci sequence
     *
     * @example new Fibonacci().next(); // 1
     *
     * @returns {number}
     * @memberof Fibonacci
     */
    next(): number;
    /**
     * Return last number in sequence
     *
     * @example new Fibonacci().current(); // 3
     *
     * @returns {number}
     * @memberof Fibonacci
     */
    current(): number;
    /**
     * Return the next number in the fibonacci sequence
     *
     * @example
     * const f = new Fibonacci()
     * f.next(); // 1
     * f.next(); // 2
     * f.before() // 1
     *
     * @returns {number}
     * @memberof Fibonacci
     */
    before(): number;
}
