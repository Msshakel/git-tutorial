// function greet(msg){
//     function greetings(name){
//         return msg+', '+name+'!'
//     }
//     return greetings
// }
// var gm=greet('Good Morning')

// // console.log(typeof gm)
// var msg = gm ('MS Shakel')
// var gn = greet('Good Night')
// var hello = greet('Hello')

// console.log(msg)
// console.log(gn('Rasel Ahmed'))
// console.log(hello('Sahan'))
function base(b){
    return function(n){
        var result = 1
        for (var i =0;i<b;i++){
            result *=n
        }
        return result
    }
}

var base10 = base (10)
console.log(base10(2))
var base5 = base(5)
console.log(base5(2))
console.log(base5(3))
console.log(base5(5))