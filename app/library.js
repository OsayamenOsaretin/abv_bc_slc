'use strict';
module.exports = {


	/* Get all prime numbers from 0 to a given N value */
	getPrimeNumbers: (number) => {

		if(number == undefined){
			return "Empty Argument error, please insert a positive integer argument"
		}

		// Test if the parameter is not a number, say string
		if(typeof(number) != 'number'){
			return "Invalid Input, please enter positive Integer";
		}

		// Test if number is a negative integer
		if(number < 0){
			return "You used a negative Integer, please try positive Integers instead"
		}

		// Test if the number is float and not Integer
		if((number % 1) !=0 ){
			return "Invalid Input, please enter positive Integer"
		}

		let array = [], upperLimit = Math.sqrt(number), output = [];

		// make array from 2 to (number - 1)
		for (let i = 0; i <= number; i++){
			array.push(true);
		}


		// Remove multiples of primes starting from 2, 3, 5, 7, ...
		for (let i = 2; i <= upperLimit; i++){
			if(array[i]) {
				for (let j = i * i; j <= number; j += i){
					array[j] = false;
				}
			}
		}

		// All array[i] set to true are primes
		for (let i = 2; i <= number; i++){
			if(array[i]){
				output.push(i);
			}
		}

		return output
	}
}