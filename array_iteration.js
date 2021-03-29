// ARRAY ITERATION JS

// *** For Each ***
// Iterate over each item of the array
[1,2,3,4].forEach((item,index)=> {
    console.log(item,index);
    // Expected output:
    // 1 0
    // 2 1
    // 3 2
    // 4 3
})

// *** Map ***
// Iterate over each item of array and creates a new array
const single = [1,2,3,4]
const double = single.map(item => item*2)
console.log(double); // Expected output: [2, 4, 6, 8]

// *** Filter ***
// creates a new array with all elements that pass the test implemented by the provided function.
const array = [1,2,3,4]
const filterArray = array.filter(item => item < 2)
// values which pass the test " item < 2 " will be return and put in filterArray
console.log(filterArray); // Expected output: [1]

// *** Reduce ***
// The reduce() method executes a reducer function (that you provide) 
// on each element of the array, resulting in single output value
// Example 1
const sum = [1,2,3,4].reduce((result,item) => {
    return result + item
},0);
console.log(sum); // Expected output: 10
// Example 2
const arrayOfObj = [{value: 1},{value: 2},{value: 3},{value: 4}]
const sumOfArrayOfObj = arrayOfObj.reduce((result,item)=>{
    return result + item.value
},
// initial value for result is 0, if value not provided 
// then first item of array({value:1}) will be result
0)
console.log(sumOfArrayOfObj); // Expected output: 10

// *** Some ***
// The some() method tests whether at least one element in 
// the array passes the test implemented by the provided function.
// It returns true if, in the array, it finds an element for which 
// the provided function returns true; otherwise it returns false. 
// It doesn't modify the array.
const hasNegativeNumber = [-1,2,3,4,5,6].some(item => item < 0)
console.log(hasNegativeNumber); // Expected output: true

// *** Every ***
// The every() method tests whether all elements in the array pass the test 
// implemented by the provided function. It returns a Boolean value.
const allNegativeNumber = [-1,2,3,4,5,6].every(item => item < 0)
console.log(allNegativeNumber); // Expected output: false

//  *** Find ***
// The find() method returns the value of the first element in the provided 
// array that satisfies the provided testing function. If no values satisfy 
// the testing function, undefined is returned.
const objects = [{value: 1},{value: 2},{value: 3},{value: 4}]
const found = objects.find(item => item.value > 1)
console.log(found); // Expected output: {value: 2} 

// ** FindIndex **
// The findIndex() method returns the index of the first element in the array 
// that satisfies the provided testing function. Otherwise, it returns -1, 
// indicating that no element passed the test.
const objects1 = [{value: 1},{value: 2},{value: 3},{value: 4}]
const foundIndex = objects1.findIndex(item => item.value === 1)
console.log(foundIndex); // Expected output: 0