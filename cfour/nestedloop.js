//Nested loop
var n = 5
for (var i =1; i <=n; i++){
    var resulte=''
    for (var j = 1; j <= i; j++){
        resulte+=j+' '
    }
    console.log(resulte)
}


var n = 10
for (i=1;i<=n;i++){
    var result=''
    for (var j=1;j<=n;j++){
        result+=' *'
    }
    console.log(result)
}