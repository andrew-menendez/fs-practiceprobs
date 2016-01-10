
var difference = function(set1,set2){

	var diffArray=[];

	for ( x in set1){
	    
		if (set2.indexOf(set1[x]) < 0){
		    console.log("keep")
		    diffArray.push(set1[x])
		} else if (set2.indexOf(set1[x]) > -1){
		    console.log("skip")
		}
	};
	
		console.log(diffArray)
		return(diffArray)

};

var symmetricDiff = function(array1,array2){
    //symDifArray=[];
    
    first=difference(array1,array2)
    
    console.log(first)
    
    second=difference(array2,array1)
    
    console.log(second)
    symDifArray=first.concat(second)
    
    return symDifArray
    
};
