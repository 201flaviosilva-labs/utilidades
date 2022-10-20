import * as Array from "./Array/index.js";
import * as Device from "./Device/index.js";
import * as DOM from "./DOM/index.js";
import * as Games from "./Games/index.js";
import * as Maths from "./Maths/index.js";
import * as SortingAlgorithms from "./SortingAlgorithms/index.js";

import { allCharactersSame } from "./allCharactersSame.js";
import { binary2Decimal } from "./binary2Decimal.js";
import { BinarySearchTree, BinarySearchTreeInstance } from "./BinarySearchTree.js";
import { stringToCamelCase, camelCaseToNormal } from "./camelCase.js";
import { stringToCapitalize, capitalizeToNormal } from "./capitalizeCase.js";
import { clone } from "./clone.js";
import { compare2Objects } from "./compare2Objects.js";
import { decimal2Binary } from "./decimal2Binary.js";
import { EventSystem, EventSystemInstance } from "./EventSystem.js";
import { Fibonacci, fibonacciSequence, fibonacciUntil, fibonacciCustomSequence, recursiveFibonacci } from "./Fibonacci.js";
import { FIFO } from "./FIFO.js";
import { getUrlParameter } from "./getUrlParameter.js";
import { getVersion } from "./getVersion.js";
import { invertSentence, invertWords } from "./invertText.js";
import { isFalsy, isTruthy } from "./isTruthyFalsy.js";
import { stringToKebabCase, kebabCaseToNormal } from "./kebabCase.js";
import { and, or, xor } from "./logicalOperators.js";
import { LIFO } from "./LIFO.js";
import { randomColor, randomColor0X, randomRGBColor, randomRGBAColor } from "./randomColor.js";
import { randomNumber, randomInt, randomFloat } from "./randomNumber.js";
import { randomString } from "./randomString.js";
import { randomWalk1D, randomWalk2D, randomWalk3D } from "./randomWalk.js";
import { stringToScreamingSnakeCase, screamingSnakeCaseToNormal } from "./screamingSnakeCase.js";
import { stringToSnakeCase, snakeCaseToNormal } from "./snakeCase.js";
import { topDownCarMovimentation } from "./topDownCarMovimentation.js";
import { Vector2 } from "./Vector2.js";

export {
	Array,
	Device,
	DOM,
	Games,
	Maths,
	SortingAlgorithms,

	BinarySearchTree, BinarySearchTreeInstance,
	EventSystem, EventSystemInstance,
	Fibonacci, fibonacciSequence, fibonacciUntil, fibonacciCustomSequence, recursiveFibonacci,
	FIFO,
	LIFO,
	Vector2,

	allCharactersSame,
	binary2Decimal,
	stringToCamelCase, camelCaseToNormal,
	stringToCapitalize, capitalizeToNormal,
	clone,
	compare2Objects,
	decimal2Binary,
	getUrlParameter,
	getVersion,
	invertSentence, invertWords,
	isFalsy, isTruthy,
	stringToKebabCase, kebabCaseToNormal,
	and, or, xor, // logicalOperators
	randomColor, randomColor0X, randomRGBColor, randomRGBAColor,
	randomNumber, randomInt, randomFloat,
	randomString,
	randomWalk1D, randomWalk2D, randomWalk3D,
	stringToScreamingSnakeCase, screamingSnakeCaseToNormal,
	stringToSnakeCase, snakeCaseToNormal,
	topDownCarMovimentation,
};
