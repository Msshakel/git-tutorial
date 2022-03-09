// Inner Function

function something(greet,name){
    function getFirstName(){
        if(name){
            return name.split(' ')[1]
        }else{
            return 'How are you?'
        }

    }
    var message = greet+' '+getFirstName()
    console.log(message)
}
something('Good Morning')