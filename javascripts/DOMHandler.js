// Variable to hold the final price. Default to 0.
// Variable to hold topping that the user selects
var finalSandwichPrice = 0;
var selectedTopping;
// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat-chooser");
var veggieChooser = document.getElementById("veggie-chooser");
var breadChooser = document.getElementById("bread-chooser");
var condimentChooser = document.getElementById("condiment-chooser");
var cheeseChooser = document.getElementById("cheese-chooser");
var ingredientHolderDiv = document.getElementById("ingredientHolder");
var toppingPrice = 0;
var totalPrice = 0;
var sandwichPrice = document.getElementById("mySandwich"); 


/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
meatChooser.addEventListener("change", meat);
function meat(){
	var selectedMeat = event.target.value;
		console.log("selectedMeat",selectedMeat);
		console.log("Price", SandwichMaker.addMeat(selectedMeat));
	if (event.target.checked === true) {
		toppingPrice = SandwichMaker.addMeat(selectedMeat);
			console.log("toppingPrice", toppingPrice);
		totalPrice = SandwichMaker.addTopping(toppingPrice);
	} else if (event.target.checked === false) {
		toppingPrice = SandwichMaker.addMeat(selectedMeat)* -1;
		totalPrice = SandwichMaker.addTopping(toppingPrice);
	}	
	console.log("totalPrice", SandwichMaker.getTotalPrice());
} 

veggieChooser.addEventListener("change", veggie);
function veggie(){
	var selectedVeggie = event.target.value;
		console.log("selectedVeggie",selectedVeggie);
		console.log("Price", SandwichMaker.addVeggie(selectedVeggie));
	if (event.target.checked === true) {
		toppingPrice = SandwichMaker.addVeggie(selectedVeggie);
			console.log("toppingPrice", toppingPrice);
		totalPrice = SandwichMaker.addTopping(toppingPrice);
	} else if (event.target.checked === false) {
		toppingPrice = SandwichMaker.addVeggie(selectedVeggie)* -1;
		totalPrice = SandwichMaker.addTopping(toppingPrice);
	}	
	console.log("totalPrice", SandwichMaker.getTotalPrice());
} 

breadChooser.addEventListener("change", bread);
function bread(){
	var selectedBread = event.target.value;
		console.log("selectedBread",selectedBread);
		console.log("Price", SandwichMaker.addBread(selectedBread));
	if (event.target.checked === true) {
		toppingPrice = SandwichMaker.addBread(selectedBread);
			console.log("toppingPrice", toppingPrice);
		totalPrice = SandwichMaker.addTopping(toppingPrice);
	} else if (event.target.checked === false) {
		toppingPrice = SandwichMaker.addBread(selectedBread)* -1;
		totalPrice = SandwichMaker.addTopping(toppingPrice);
	}	
	console.log("totalPrice", SandwichMaker.getTotalPrice());
} 

condimentChooser.addEventListener("change", condiment);
function condiment(){
	var selectedCondiment = event.target.value;
		console.log("selectedCondiment",selectedCondiment);
		console.log("Price", SandwichMaker.addCondiment(selectedCondiment));
	if (event.target.checked === true) {
		console.log(selectedCondiment);
		toppingPrice = SandwichMaker.addCondiment(selectedCondiment);
			console.log("toppingPrice", toppingPrice);
		totalPrice = SandwichMaker.addTopping(toppingPrice);
	} else if (event.target.checked === false) {
		toppingPrice = SandwichMaker.addCondiment(selectedCondiment)* -1;
		totalPrice = SandwichMaker.addTopping(toppingPrice);
	}	
	console.log("totalPrice", SandwichMaker.getTotalPrice());
} 

cheeseChooser.addEventListener("change", cheese);
function cheese(){
	var selectedCheese = event.target.value;
		console.log("selectedCheese",selectedCheese);
		console.log("Price", SandwichMaker.addCheese(selectedCheese));
	if (event.target.checked === true) {
		toppingPrice = SandwichMaker.addCheese(selectedCheese);
			console.log("toppingPrice", toppingPrice);
		totalPrice = SandwichMaker.addTopping(toppingPrice);
	} else if (event.target.checked === false) {
		toppingPrice = SandwichMaker.addCheese(selectedCheese)* -1;
		totalPrice = SandwichMaker.addTopping(toppingPrice);
	}	
	console.log("totalPrice", SandwichMaker.getTotalPrice());
} 


// Dynamic Code, was replaced, because information could be overwritten.
// var importedMeatPrices = SandwichMaker.addMeat();
// var meatPlanet = "";
// function populateDiv() {
	// ingredientHolderDiv.innerHTML = "";
	// for ( i = 0 ; i < importedMeatPrices.length ; i++ ) {
	// 	meatPlanet += `<div class="meatBox" id="meat-chooser-${i}">`;
	// 	meatPlanet += `<div class="meatName">  ${importedMeatPrices[i].meat} </div>`;
	// 	meatPlanet += `<div class="individualMeatPrice">  ${importedMeatPrices[i].price}</div>`;
	// 	meatPlanet += `</div>`;
	// }
// 		ingredientHolderDiv.innerHTML += meatPlanet;
// }
 	
  // Get the value chosen from the DOM

// meatChooser.addEventListener("change", function(event) {
//   // Get the value chosen from the DOM
//   selectedTopping = event.target.value;
//   // Determine the price of the topping chosen
function sandwichPricer() {
	console.log("inside the sandwichPricer");
	sandwichPrice.innerHTML = "<h1>" + "Your Sandwich Price is $" + SandwichMaker.getTotalPrice(); + "</h1>" 
}
//  function showMeTheMoney(event){
// 	if(event.target.className === "meatName" || event.target.className === "individualMeatPrice") {
// // 2-22-17 Need to adjust the classes to follow the example in clicky-planets; ran out of time
var makeSandwichButton = document.getElementById("make-sandwich");
makeSandwichButton.addEventListener("click", sandwichPricer);
// 		console.log("What is this? ", event.target.innerHTML);
// 		console.log("unique ID", event.target.parentNode.id);
// 		console.log("Text?", event.target.previousSibling);
// 		event.target.parentNode.classList.add('selected');
// 		toppingPrice = event.target.sandwichPrice;
// 		sandwichPrice += toppingPrice;
	
// 	}
// }
//   // Add the topping to the SandwichMaker to increase the total price
// }
// meatChooser.addEventListener("click", populateDiv);
// populateDiv();
// document.body.addEventListener("click", showMeTheMoney);
