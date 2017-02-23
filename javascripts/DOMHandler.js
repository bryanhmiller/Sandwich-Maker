// Variable to hold the final price. Default to 0.
// Variable to hold topping that the user selects
var finalSandwichPrice = 0;
var selectedTopping;
// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat-chooser");
var ingredientHolderDiv = document.getElementById("ingredientHolder");


/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
var importedMeatPrices = SandwichMaker.addMeat();
var meatPlanet = "";
function populateDiv() {
	ingredientHolderDiv.innerHTML = "";
	for ( i = 0 ; i < importedMeatPrices.length ; i++ ) {
		meatPlanet += `<div class="meatBox" id="meat-chooser-${i}">`;
		meatPlanet += `<div class="meatName">  ${importedMeatPrices[i].meat} </div>`;
		meatPlanet += `<div class="individualMeatPrice">  ${importedMeatPrices[i].price}</div>`;
		meatPlanet += `</div>`;
	}
		ingredientHolderDiv.innerHTML += meatPlanet;
}
 	
  // Get the value chosen from the DOM

// meatChooser.addEventListener("change", function(event) {
//   // Get the value chosen from the DOM
//   selectedTopping = event.target.value;
//   // Determine the price of the topping chosen
 function showMeTheMoney(event){
	if(event.target.className === "meatBox") {
// 2-22-17 Need to adjust the classes to follow the example in clicky-planets; ran out of time

		console.log("event worked", event);
		console.log("unique ID", event.target.parentNode.id);
		console.log("Text?", event.target.previousSibling);
		event.target.previousSibling.classList.remove('hidden');
	}
}

//   // Add the topping to the SandwichMaker to increase the total price
// }
// meatChooser.addEventListener("click", populateDiv);
populateDiv();
document.body.addEventListener("click", showMeTheMoney);
