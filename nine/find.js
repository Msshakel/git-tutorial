var arr = [7,4,8,6,9 ,2,1,70,3]

// var result=arr.find(function(value,index){
//     return value===9
// })
// console.log(result)

// var result = arr.findIndex(function(value){
//     return value===9
// })
// console.log(result)

function myFind(arr,cb){
    for(var i = 0;i<arr.length;i++){
        if(cb(arr[i])){
            // return arr[i]
            return i
        }
    }
}
var result = myFind(arr,function(value){
    return value ===9
})
console.log(result)