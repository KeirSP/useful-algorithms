// this will swap two numbers in an array using a third placeholder
var swap = function(array, firstIndex, secondIndex) {

	var holder = array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = holder;
};

var testArray = [7, 9, 4];
swap(testArray, 0, 1);

println(testArray);

Program.assertEqual(testArray, [9, 7, 4]);
