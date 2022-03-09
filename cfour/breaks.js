// Break Statement
while(true){
    var rand=Math.floor(Math.random()*10+1)
    if (rand===9){
        console.log('Youre win')
        break
    }
    else{
        console.log('loser'+rand)
    }
}