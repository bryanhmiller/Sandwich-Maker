// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var condimentPrices = {
  	"mustard":0.05, "spicyMustard":0.10, "mayo":0.05, "salt":0.05, "pepper":0.05, "bacon":1.00 
  };

  // Augment the original object with another method
  maker.addCondiment = function(selectedCondiment) {
    return condimentPrices[selectedCondiment];
  }

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});