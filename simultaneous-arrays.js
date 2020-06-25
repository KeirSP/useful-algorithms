const array1 = ['a', 'b', 'c'];
const array2 = [1, 2, 3];

array1.forEach((element, index) => {
  	console.log(element + array2[index])
    })
    
// this will output a1, b2, c3. 
// removing index and simply having 2 nested forEach 
