// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrices = {
  	"havarti":1.19, "pepperJack":0.89, "asiago":1.09, "swiss":0.89, "sharpCheddar":1.09, "colby":0.99 
  };

  // Augment the original object with another method
  maker.addCheese = function(selectedCheese) {
    return cheesePrices[selectedCheese];
  }

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});