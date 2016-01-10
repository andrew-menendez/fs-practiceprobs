
var translate = function(string){
    
var vowel_check=function(letter){
    var vowels=['a','e','i','o','u']
    
    var vowel_indicator=vowels.indexOf(letter)
    
    if (vowel_indicator > -1){
        return true 
    }else {
        return false 
    };
    
}; // end vowel_check
 var piggify= function(theWord){
        console.log(theWord)
        debugger
            if (theWord.substring(0,2)=="qu"){
                console.log("first letters of "+theWord+ " are qu")
    	        
    	        palabra=theWord.substring(2,theWord.length)+theWord.substring(0,2)
    	        console.log(palabra)
    	        piggify(palabra)
            }
    	    else if (vowel_check(theWord.substring(0,1))) {
    	        console.log("first letter of " + theWord+ ' is a vowel')
    	       
    	        newWord=theWord+"ay"
    	        
    	        console.log("new word is "+newWord)
    	        new_words.push(newWord)
    	        // question on closure -> why if I "return" newWord here, does it become undefined?
    	    } else {
    	        console.log("first letter of "+theWord+ " is not vowel")
    	        
    	        palabra=theWord.substring(1,theWord.length)+theWord.substring(0,1)
    	        console.log(palabra)
    	        piggify(palabra)
    	    }
    	    
    	    }; //end piggify
    	    
    	    
    var new_string="";
    var new_words=[];
	s=string.split(" ");
	
	
	for (var w in s){
	    
	    word=s[w]
	    
	    piggify(word);
	    
	    //console.log(new_word);
	    
	    
	   
	    };
	    
	

return new_words.join(" ");
	
};


