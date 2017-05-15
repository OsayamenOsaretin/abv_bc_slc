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

describe("Empty argument Handling", function(){
	// spec for handling empty parameters

	it("should throw error for empty argument", function(){
		expect(MyApp.getPrimeNumbers().toEqual("Empty Argument error, please insert a positive integer argument"))
	});
});


describe("Handle appropriate input Argument", function(){
	// spec for handling appropriate input parameters

	it("should return [2,3,5] as prime values up to 5", function(){
		expect(MyApp.getPrimeNumbers(5).toEqual([2,3,5]))
	});

	it("should return [2,3,5,7,11] as prime values up to 11", function(){
		expect(MyApp.getPrimeNumbers(11).toEqual([2,3,5,7,11]))
	});

	it("should return [2,3,5,7] as prime values up to 7", function(){
		expect(MyApp.getPrimeNumbers(7).toEqual(2,3,5,7))
	});

	it("should return [] as prime values up to 1", function(){
		expect(MyApp.getPrimeNumbers(1).toEqual([]))
	});
});






