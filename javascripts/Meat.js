// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = [
  {
    meat:"turkey",
    price:1.99
  },
  {
    meat:"roastBeef",
    price:2.99
  },
  {
    meat:"ham",
    price:2.49
  },
  {	
    meat:"salami",
    price:2.79
  },
  {	
    meat:"bacon",
    price:3.49
  }, 
  {	
    meat:"noMeat",
    price:18.99
  }];

  // Augment the original object with another method
  maker.addMeat = function() {
    return meatPrices;
  }

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});