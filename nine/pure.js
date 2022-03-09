// What is Pure Function

// It Returns the smae result if given the smae arguments
// It does not cause any observable side effects


function sqr(n){
    return n*n

}
console.log(sqr(2))
console.log(sqr(3))
console.log(sqr(4))

var n = 10
function change(){
    n = 100

}
change()
console.log(n)


var point = {
    x:45,
    y:30
}
function printpoint(point){
    point.x=100
    point.y=200
    console.log(point)
}
printpoint(point)
console.log(point)