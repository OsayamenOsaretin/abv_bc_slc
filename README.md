# abv_bc_slc
Day one - Self help clinic


									Asymptotic Analysis
The get prime function is built with the classic Sieve of Erathosthenes, which minimises iterations when finding prime numbers from 0-n, by keeping track of prime numbers in a list.

The three if statements: Take constant time 3*O(1).

Instantiate placeholder arrays to hold results: Take constant time 3 * O(1).

for loop to instantiate all values in empty array to true: Takes linear time O(n).

In sieve for each prime number, you do n/2 iterations: n/2 + n/3 + n/5 + ... : 
															Takes O(log log n) time
					see here for proof: https://en.wikipedia.org/wiki/Divergence_of_the_sum_of_the_reciprocals_of_the_primes

for loop that collects all the primes into one array:   Takes Linear time 0(n)


Total Big O time:  O(N) =  3*O(1) + 3*O(1) + O(n) + O(log log n) + O(n)
					Largest asymptotic growth contributed by 4th term
					O(N) approximately= O(log log n)

					



