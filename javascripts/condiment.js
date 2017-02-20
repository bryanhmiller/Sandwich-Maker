// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var condiments = {
  	mustard:0
  	spicyMustard:0
  	mayo:0
  	salt:0
  	pepper:0
    bacon:1.00 
  }

  // Augment the original object with another method
  maker.addCondiments = function() {
    return condiments;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);