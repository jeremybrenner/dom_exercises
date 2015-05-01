window.addEventListener("load", function (){
	// Your code here
	//PART 1
	var button = document.querySelector("button");
	button.addEventListener("click", function(event){
		alert("You clicked the button!")
	});
	//
	//
	//PART 2
	var box = document.querySelector("div#mouser")
	box.onmouseover = function(evt){
	  box.style.backgroundColor = "yellow";
	};

	box.onmouseout = function(evt){
	  box.style.backgroundColor = "green"; 	
	};
	// 
	// 
	// PART 3
	// var form = document.querySelector("form#former");
	// form.addEventListener("submit", function() {
	//      alert("text was submitted!");
	// });
	//
	//
	// PART 4
	var form = document.querySelector("form#former");
	form.addEventListener("submit", function(event) {
		 event.preventDefault();
	     alert("text was submitted!");
	});
	//
	//
	// Part 5
	var veg = document.querySelector("ul");
	veg.addEventListener("click", function(event){
	   alert(event.target.innerText);
	});
	//
	//
	// Part 6

	    // your work here.
});