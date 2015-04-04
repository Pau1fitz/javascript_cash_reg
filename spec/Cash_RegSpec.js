describe("cash register", function() {

  var register;
  beforeEach(function() {
    register = new CashRegister();
  });

  it("should be initialized have an empty order", function() {
    expect(register.basket.length).toEqual(0);
  });

  it('can add items to the basket', function(){
    register.addItem("coffee");
    expect(register.basket.length).toEqual(1);
  });

  it('can remove items from the basket', function(){
    register.addItem("coffee");
    register.removeItem("coffee")
    expect(register.basket.length).toEqual(0);
  });
});
