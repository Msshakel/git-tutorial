//Insert Remove and Replace Method
var arr = [1,2,3,4,5,6,7,8]
// Insert 9 to index 3
// arr [3] = 9
// arr.push(9) insert data in last
// arr.unshift(9) insert data in first

// arr.splice(3,0,9,88)  for adding element 

// arr [3]= undefined
// arr.pop() last Element will remove 
// arr.shift() will remove first element

 arr.splice(3,1 )  // (index number,delete number,)

 
console.log(arr)