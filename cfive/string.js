// Chapter Five
// String in Javascript

// What is String
// var str = 'Something'
// var str2 = String('Something') // This is called String Constractor
// console.log(str2)
// var n =10
// var s = String(n)
// console.log(s)
 // ****Escape Notation********//
//  var str = 'This is a \'String\''
//  var str2 = 'This is a \nString\ ' /// \n means = New line
//  var strb = 'This is a back \\shaless'
//  console.log(str)
//  console.log(str2)
// console.log(strb)

//********** String Comparison  */ 
// var a = 'abc'
// var b = 'bcd'
// console.log(a===b)
// console.log(a<b)
// console.log(a>b)
// console.log('001'==1)

//************string method */
var a = 'I am '
var b ='MS Shakel'

var c = a.concat('',b)
// var d = c.substring(3)
// console.log(d)
console.log(c.charAt(5))
console.log(c.startsWith('I am'))
console.log(c.endsWith('el'))
console.log('abc'.toUpperCase())
console.log('def'.toLowerCase())
console.log('      dsdfsd      '.trim())
console.log(c.split(' '))
console.log(c.split(''))                           

// String length*************//
var str = 'Some String'
var str2 = str.charAt(12)
console.log(str2)
