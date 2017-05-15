// testing code goes here 

'use strict';

const expect = require('jasmine-expect');

describe("Invalid Input type Handling", function(){
	// spec for testing invalid inputs (strings)
	it("should return invalid input message for strings", function(){
		expect(MyApp.getPrimeNumbers("string").toEqual("Invalid Input, please enter positive Integer"))
	});
	// spec for testing invalid inputs (floats or doubles)
	it("should return invalid input message for float 4.2", function(){
		expect(MyApp.getPrimeNumbers(4.2).toEqual("Invalid Input, please enter positive Integer"))
	});
});


describe("Negative Integer Handling", function(){
	//spec for testing negative integer inputs
	it("should return negative integer input error message for -5", function(){
		expect(MyApp.getPrimeNumbers(-5).toEqual("You used a negative Integer, please try positive Integers instead"))
	});

	it("should return negative integer input error message for -50", function(){
		expect(MyApp.getPrimeNumbers(-50).toEqual("You used a negative Integer, please try positive Integers instead"))
	});

	it("should return negative integer input error message for -100", function(){
		expect(MyApp.getPrimeNumbers(-100).toEqual("You used a negative Integer, please try positive Integers instead"))
	});
});

