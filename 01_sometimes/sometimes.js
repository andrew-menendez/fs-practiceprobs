
var sometimes = function(thefunc){
    console.log("sometimes is running")
    //console.log(arguments)
    var count=0
    return function(){
        console.log(arguments)
        
        console.log(arguments[0])
        
        count+=1
        console.log(count)
        if(count<4){
        return thefunc.apply(this,arguments);
        } else if (count%2 ==0){
            return 'I do not know!'
        } else if (count%2 !=0){
            return thefunc.apply(this,arguments);
        }
    }
  
};
