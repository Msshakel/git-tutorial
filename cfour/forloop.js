// // for loops
// for (var i=0;i<100;i++) {
//     console.log((i+1)+' Ms shakel')
// }

// // for (initializer,condition,increment){
// //
// //               }
// for (var i=1;i<100;i++){
//     if(i%2===1){
//         console.log(i)
//     }
// }
// for (var i=1;i<100;i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }
var sum=1;
for (var i=1;i<=10;i++){
    console.log(sum+'+'+i+'='+(sum+i))
    sum +=i
}
console.log('result='+sum)