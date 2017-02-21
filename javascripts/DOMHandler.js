2// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat-chooser");
/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
meatChooser.addEventListener("change", makeMySandwich);

function makeMySandwich(meatChooser) {
 	
  // Get the value chosen from the DOM
  selectedTopping = meatChooser.target.value;

  // Determine the price of the topping chosen
 
  // Add the topping to the SandwichMaker to increase the total price
}

console.log(SandwichMaker.addMeat());
console.log(selectedTopping);