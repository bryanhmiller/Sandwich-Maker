// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
  	turkey:1.99
  	roastBeef:2.99
  	ham:2:49
  	salami:2:79
  	bacon:3:49 
  }

  // Augment the original object with another method
  maker.addMeat = function() {
    return meatPrices;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);