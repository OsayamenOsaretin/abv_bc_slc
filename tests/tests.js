// testing code goes here 

'use strict';

const expect = require('jasmine-expect');

describe("Invalid Input Handling", function(){
	// spec for testing invalid inputs (strings)
	it("should return invalid input message for strings", function(){
		expect(MyApp.getPrimeNumbers("string").toEqual("Invalid Input, please enter positive Integer"))
	});
	// spec for testing invalid inputs (floats or doubles)
	it("should return invalid input message for float 4.2", function(){
		expect(MyApp.getPrimeNumbers(4.2).toEqual("Invalid Input, please enter positive Integer"))
	});
});