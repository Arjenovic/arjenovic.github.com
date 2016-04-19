//this is how you define a class in javascript
var Kangaroo = function (firstName, divName, parentName) {
	this.divName = divName;

	//Check if element with given ID exists
		//if not:
		if (!document.getElementById(divName)){
		//Create new element with ID KangarooHuis
			//console.log("Kangaroo container has been created.");
			NieuwKangarooHuis = document.createElement("div");
			NieuwKangarooHuis.setAttribute('id', divName);

			//als een parentname is ingevuld, gooi het kangaroohuis hierin
			if(parentName != undefined && parentName != null && parentName != ""){
				document.getElementById(parentName).appendChild(NieuwKangarooHuis);
			}else{ //als er geen parentname is ingevuld
				//console.log("No parent defined.");
				document.body.appendChild(NieuwKangarooHuis);
			}
		}else{
		//if yes: do nothing
			//console.log("Kangaroo container already exists.");
		}
		
	this.firstName = firstName;
	//console.log("Instance created.");

	defaultSettings = {
		greeting: 'Hello'
	};
};
	//To create a method within the class Kangaroo use 'prototype'
	Kangaroo.prototype.createAvatar = function(width, height, source){
		nieuwKangaroo = document.createElement('IMG');
		nieuwKangaroo.style.width = width + 'px';
		nieuwKangaroo.style.height = height + 'px';
		nieuwKangaroo.setAttribute('src', source);
		nieuwKangaroo.setAttribute('id', 'Kangaroo' + this.firstName);

		document.getElementById(this.divName).appendChild(nieuwKangaroo);
	}

	Kangaroo.prototype.speak = function(){
		console.log(defaultSettings.greeting + ", I am " + this.firstName);
	}

	Kangaroo.prototype.speakOnClick = function(){
		var that = this;
		document.getElementById('Kangaroo' + this.firstName).onclick = function() { 
			alert("Hoi, ik ben " + that.firstName + "!"); 
		};
	}
	
	Kangaroo.prototype.bounce = function(){
		elementje = document.getElementById("Kangaroo" + this.firstName);
		elementje.className = "bounce";
	}



//Helpful link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript