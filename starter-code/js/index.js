function deleteItem(element){
  document.body.removeChild(element);

}

function getPriceByProduct(itemNode){
  var items = document.querySelectorAll('.col-xs-1');
  var prices = document.querySelectorAll('.col-xs-2');
  var itemIndex;
  items.forEach(function (item, i) {
    if (items[i].firstChild.innerHTML == itemNode.innHTML){
      itemIndex = i;
    }
  });
  return prices[i].innerHTML;
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var prices = document.querySelectorAll('.col-xs-2');
  var quantities = document.querySelectorAll('.quantity');
  var itemTotal = document.querySelectorAll('.col-xs-4');
  var totalPrice = document.querySelector('h2').firstElementChild;
  console.log(itemTotal[0].firstElementChild.innerHTML.slice(1));

  prices.forEach(function (price, i) {
    itemTotal[i].firstElementChild.innerHTML = "$" + (quantities[i].value * parseInt(prices[i].firstElementChild.innerHTML.slice(1))).toFixed(2);
  });

  totalPrice.innerHTML = "$" + (0).toFixed(2);
  itemTotal.forEach(function (itemTotal, i) {
    totalPrice.innerHTML = "$" + ((parseInt(totalPrice.innerHTML.slice(1))) + (parseInt(itemTotal.firstElementChild.innerHTML.slice(1)))).toFixed(2);
});
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){
}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){
  //create
  var item = document.createElement('div');

  var price;//div & span
  var quantity;//div & input
  var total;//div & span
  var deleteButton;//div & button
  //set attributes
  //insert before buttons

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.querySelectorAll('.col-xs-5');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

    deleteButtons.forEach( function(button, i) {
    button.onclick = function () {
        deleteItem(this.parentNode);
      };
    });
};
