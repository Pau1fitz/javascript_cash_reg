var CashRegister = function(){
  this.basket = [];
};

CashRegister.prototype.addItem = function(item) {
  this.basket.push(item);
  return this.basket
};

CashRegister.prototype.removeItem = function(item) {
  var i = this.basket.indexOf(item);
  if(i != -1){
    this.basket.splice(i, 1);
  }
  return this.basket
};


