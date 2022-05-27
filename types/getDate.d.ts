/**
 * Returns the number of milliseconds since midnight Jan 1 1970, and a specified date
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 *
 * @example
 * getTime() // 1653573577063
 *
 * @returns {number}
 */
export function getTime(): number;
/**
 * Returns the current milliseconds (from 0-999)
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 *
 * @example
 * getMilliseconds() // 134
 * getMilliseconds() // 952
 *
 * @returns {number} current milliseconds
 */
export function getMilliseconds(): number;
/**
 * Returns the current seconds (from 0-59)
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 *
 * @example
 * getSeconds() // 0
 * getSeconds() // 24
 *
 * @returns {number} current seconds
 */
export function getSeconds(): number;
/**
 * Returns the current minutes (from 0-59)
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 *
 * @example
 * getMinutes() // 0
 * getMinutes() // 24
 *
 * @returns {number} current minutes
 */
export function getMinutes(): number;
/**
 * Returns the current hour (from 0-23)
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 *
 * @example
 * getHours() // 4
 * getHours() // 23
 *
 * @returns {number} current hours
 */
export function getHours(): number;
/**
 * Returns the day of the month (from 1-31)
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 *
 * @example
 * getDay() // 1
 * getDay() // 23
 * getDay() // 31
 *
 * @returns {number} current day
 */
export function getDay(): number;
/**
 * Returns the current day of the week (from 1-7)
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 *
 * @example
 * getWeekDay() // 1
 * getWeekDay() // 5
 * getWeekDay() // 7
 *
 * @returns {number} current day of the week
 */
export function getWeekDay(): number;
/**
 * Returns the current week in the year
 *
 * @example
 * getWeek() // 21
 * getWeek() // 50
 *
 * @returns {number} current week in the year
 */
export function getWeek(): number;
/**
 * Returns the month (from 1-12)
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 *
 * @example
 * getDay() // 1
 * getDay() // 6
 * getDay() // 12
 *
 * @returns {number} current month
 */
export function getMonth(): number;
/**
 * Returns the year
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 *
 * @example
 * getDay() // 1970
 * getDay() // 2000
 * getDay() // 2042
 *
 * @returns {number} current year
 */
export function getYear(): number;
/**
 * Return a string with a formatted date in Day-Month-Year system
 *
 * @example
 * getDateFormatted() // "1/1/2021"
 * getDateFormatted() // "26/5/2022"
 * getDateFormatted() // "25/12/2042"
 *
 * @returns {string}
 */
export function getDateFormatted(): string;
