// Chapter Seven: Objects in Javascript
// class No 50
// Student 1:
// Math:80
// English:76
// Bangla:85
// [80,76,85]

// var obj = {} // Object defined
// obj.x = 10
// obj.y = 11
// console.log(obj)
 
// Object literal
// var point = {
//     x:10,
//     y:98
// }
// point.z=40
// console.log(point)


// // Object Constractor 
// var obj = Object()
// obj.a = 10
// console.log(obj)

// var obj2 = new Object()
// obj2.b = 20
// console.log(obj2)
var point ={
    x:10,
    y:20,
    z:30
}
// console.log(point.x+point.y)
// console.log(point['x'])
// console.log(point['z'])
// var show = 'x'
// console.log(point[show])
point.x = 45
point.a = 15
console.log(point)
point['y'] = 33
var prop = 'z'
point[prop]=55
console.log(point)

// For Remove a property

delete point.a 
console.log(point)