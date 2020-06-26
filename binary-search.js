//binary search is a way of searching through ORDERED data by determining where the search object is located in the data and using a process of "halving" each time to get there
//e.g for finding number 8 in an array of numbers 1 - 10, start at five, then 7, then 8.
//this is much faster than linear search (going up one by one from the first entry)

//let min = 1 and max = n
//guess the avg of min and max, rounded down
//too low? set min as guessed number +1
//too high? set max as guessed number -1

var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    var numOfGuesses = 1;
    
    while(max >= min) {
        guess = Math.floor((max + min)/2);
        if(array[guess] === targetValue){
            println("You guessed in "+ numOfGuesses + " attempts");
            return guess;
        }
        else if(array[guess] < targetValue) {
            min = guess +1;
        }
        else {
            max = guess - 1;
        }
        numOfGuesses += 1;
        println(guess);
    }
	return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);
println("Found prime at index " + result);
