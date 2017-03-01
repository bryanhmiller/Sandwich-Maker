// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different veggie prices
  var veggiePrices =   {
    "romaine":0.19, "tomato":0.19, "cucumber":0.19, "onion":0.19, "pepper":0.19
  };

  // Augment the original object with another method
  maker.addVeggie = function(selectedVeggie) {
    return veggiePrices[selectedVeggie];
  }

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});