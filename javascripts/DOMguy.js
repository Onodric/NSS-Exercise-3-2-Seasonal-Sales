"use strict";
function showProducts(products){
  var productPlacement = document.getElementById("productCards");
  productPlacement.innerHTML = '';
  products.forEach( function(element, index) {
    var categoryName = '';
    var seasonName = '';
    var discountedPrice = element.price * (1-Sales.getDiscount(element.category_id));
    if(element.category_id == 1){
      categoryName = Sales.getCategories()[0].name;
      seasonName = Sales.getCategories()[0].season_discount;
    } else if (element.category_id == 2) {
      categoryName = Sales.getCategories()[1].name;
      seasonName = Sales.getCategories()[1].season_discount;
    } else if (element.category_id == 3) {
      categoryName = Sales.getCategories()[2].name;
      seasonName = Sales.getCategories()[2].season_discount;
    } else {
      categoryName = 'No Category';
    }
    productPlacement.innerHTML += '<article class="product-card"><h2>' + element.name + '</h2><p class="' + seasonName + '">' + categoryName + '</p><p class="price">$' + element.price.toFixed(2)+ '</p><p class="sale-price hidden">$' + discountedPrice.toFixed(2) + '</p></article>';
  });
  return;
}

function showCategories(categories){
  var booger = document.getElementById("discount");
  var tempOption = '';
  categories.forEach( function(element, index) {
    tempOption += '<option value="' + element.season_discount + '">' + element.season_discount + '</option>';
  });
  booger.innerHTML += tempOption;
  return;
}

Sales.loadCategories(showCategories);
Sales.loadProducts(showProducts);

document.getElementById("discount").addEventListener("change", function(){
  var season = event.target.value;
  for (let i = 0; i < document.getElementsByClassName("sale-price").length; i++){
    document.getElementsByClassName("sale-price")[i].classList.add("hidden");
    document.getElementsByClassName("price")[i].classList.remove("hidden");
  }
  for (let j = 0; j < document.getElementsByClassName(season).length; j++){
    document.getElementsByClassName(season)[j].nextElementSibling.classList.toggle("hidden");
    document.getElementsByClassName(season)[j].nextElementSibling.nextElementSibling.classList.toggle("hidden");
  }
});
