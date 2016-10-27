"use strict";
var Sales = (function(){
  var products = [];
  var categories = [];
  var productCategory = '';

  return {
    loadProducts: function(callbackFn){
      var loadThing = new XMLHttpRequest();
      loadThing.open("GET", "data/products.JSON");
      loadThing.send();

      loadThing.addEventListener("load", function(){
        products = JSON.parse(this.responseText).products;
        callbackFn(products);
      });
    },
    loadCategories: function(callbackFn){
      var loadThing = new XMLHttpRequest();
      loadThing.open("GET", "data/categories.JSON");
      loadThing.send();

      loadThing.addEventListener("load", function(){
        categories = JSON.parse(this.responseText).categories;
        callbackFn(categories);
      });
    },
    getProducts: function(){
      return products;
    },
    getCategories: function(){
      return categories;
    },
    getDiscount: function(cat){
      return categories[cat - 1].discount;
    }
  };

})();

