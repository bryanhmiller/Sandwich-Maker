// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different veggie prices
  var breadPrices = {
    "focaccia":0.79, "sourdough":0.59, "multigrain":0.89, "pumpernickel":0.69, "baguette":0.79
  };

  // Augment the original object with another method
  maker.addBread = function(selectedBread) {
    return breadPrices[selectedBread];
  }

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});