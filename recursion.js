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
