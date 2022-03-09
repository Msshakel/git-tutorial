// Infinity For Loop
for (; ; ){
    var rand =Math.floor(Math.random()*10+1)
    if(rand===9){
        console.log('got it')
        break
    }else{
        console.log('lose '+ rand)
    }

}