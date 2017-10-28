function Phone( brand, price, color, memory) {
  
  this.brand = brand;
  this.price = price;
  this.color = color;
  this.memory = memory;
}

Phone.prototype.printInfo = function() {
  
  console.log(`The phone brand is ${this.brand}, the price is ${this.price}, and it has color of ${this.color}. It has memory of ${this.memory}.`);
};

Phone.prototype.printColor = function() {
  
  console.log(`The color of this phone is ${this.color}`);
};

Phone.prototype.isPink = function() {
  
   return Object.is(this.color, 'pink');
};

let galaxyS6 = new Phone('Samsung', 1400, 'golden', '16 GB');
let iPhone6S  = new Phone('Apple', 1599, 'white', '32 GB');
let one = new Phone('OnePlus', 1299, 'pink', '64 GB');