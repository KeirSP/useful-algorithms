//factorial with a for loop

var factorial = function(n) {
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result = result * i;
    }

    return result;
};

//factorial with recursion

var factorial = function(n) {
	// base case: 
	if(n === 0) {
	    return 1;
	}
	// recursive case:
	return factorial(n-1) * n;
}; 

//palindrome with recursion

// Returns the first character of the string str
var firstCharacter = function(str) {
    return str.slice(0, 1);
};

// Returns the last character of a string str
var lastCharacter = function(str) {
    return str.slice(-1);
};

// Returns the string that results from removing the first
//  and last characters from str
var middleCharacters = function(str) {
    return str.slice(1, -1);
};

var isPalindrome = function(str) {
    // base case #1
    if (str.length <= 1) {
        return true;
    }
    // base case #2
    if (firstCharacter(str) !== lastCharacter(str)){
        return false;
    }
    // recursive case
    return isPalindrome(middleCharacters(str));
};

var checkPalindrome = function(str) {
    println("Is this word a palindrome? " + str);
    println(isPalindrome(str));
};

//recursion to calculate powers
var isEven = function(n) {
    return n % 2 === 0;
};

var isOdd = function(n) {
    return !isEven(n);
};

var power = function(x, n) {
    println("Computing " + x + " raised to power " + n + ".");
    // base case
    if(n === 0) {
        return 1;
    }
    // recursive case: n is negative
    if(n < 0) {
        return 1 / power(x, -n);
    }
        
    // recursive case: n is odd
    if(isOdd(n)) {
        return x * power(x, n-1);
    }
    // recursive case: n is even
    if(isEven(n)) {
        var y = power(x, n/2);
        return y * y;
    }
};

var displayPower = function(x, n) {
    println(x + " to the " + n + " is " + power(x, n));
};

// drawing a sierpinksi gasket

var dim = 240;
var minSize = 8;
	
var drawGasket = function(x, y, dim) {
    if (dim <= minSize) {
	    rect(x, y, dim, dim);
    }
    else {
	    var newDim = dim / 2;
	    //drawGasket(x, y, newDim);
	    drawGasket(x + newDim, y, newDim);
	    drawGasket(x, y + newDim, newDim);
	    drawGasket(x + newDim, y + newDim, newDim);
    }
};

draw = function() {
    background(255, 255, 255);
    fill(255, 255, 0);
    rect(0, 0, dim, dim);
    stroke(0, 0, 255);
    fill(0, 0, 255);
    drawGasket(0, 0, dim);
};
