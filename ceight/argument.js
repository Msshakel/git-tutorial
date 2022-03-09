// // function add (a,b){
// //     var result = a+b
// //     console.log(a+b)
// // }
// // add(10,20)
// // add(45,23)
// var arr1 = [2,5,9]
// var arr2 = [7,9,3]
// var arr3 = [4,1,8]
// // var sum = 0

// // for (var i = 0; i<arr1.length; i++){
// //        sum1 +=arr1[i]
// // }
// // console.log(sum1)
// function sumOfArray(arr){
//     var sum = 0
//     for (var i = 0; i<arr.length;i++){
//         sum+=arr[i]
//     }
//     console.log(sum)
// }

// sumOfArray(arr1)
// sumOfArray(arr2)
// sumOfArray(arr3)


function test(a, b, c){
    // console.log(arguments)
   for (var i=0;i<arguments.length;i++){
        console.log(arguments[i])
   } 
}
// test()
test (10,20,30)
function addAll(){
    var sum = 0
    for (var i=0;i<arguments.length;i++){
        sum+=arguments[i]
    }
    console.log(sum)
}
addAll(1,2,3)
addAll(1,2,3,4,5,6,7,8,9,10)
var a = addAll(1,2,3)
var b = addAll(1,2,3,4,5,6,7,8,9,10)
console.log(a,b)