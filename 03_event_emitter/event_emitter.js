
var MyEventEmitter = function() {

	this.events={};

};


MyEventEmitter.prototype.addListener= function(aName,theListenerFunction) { 

	
	//console.log(this);
	//console.log(this.events);
	//console.log(events);
	this.events[aName]=[theListenerFunction];

	this.addListener= function(bName,newFunction){

		console.log(this);
		console.log(bName);
		console.log(typeof this.events[bName])

		if(typeof this.events[bName]=="undefined"){
			this.events[bName]=[newFunction];
		}else{
			this.events[bName].push(newFunction)
		};

		
	};

	

	console.log(this.events);
	
	//I'm adding the listener to the contructor function,
	// not the "event Emitter" function... WHY???
};


MyEventEmitter.prototype.emit= function(listener,input) { 
	//console.log(this);
	//console.log(this.events);
	//console.log(this.events[listener]);
	var funcsToRun=this.events[listener];

	for (var func in funcsToRun){
		console.log(funcsToRun[func])
		funcsToRun[func].apply(this,[input]);
	}
	

};



MyEventEmitter.prototype.checkStuff2= function(key){
	console.log(this.events.key);
}

MyEventEmitter.prototype.checkStuff= function(){
	console.log(this.events);
	console.log(this);
}

MyEventEmitter.prototype.changeStuff= function(new_func){
	console.log(new_func)
	this[new_func]="banana"
}
//eventEmitter = new MyEventEmitter();

