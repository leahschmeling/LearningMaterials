// We store our `object` in a variable
const carObject = {
  // For readability we can use the following formatting of `property`: `property value` 
  // followed by a comma
  make: "Jeep",
  model: "Wrangler",
  tires: 4,
  mileage: 110000
};

// access object properties via dot notation
console.log(carObject.make);

// access object properties via bracket notation
// bracket notation
const model = 'model';
const make = 'make'
console.log('Make: '+ carObject[make])
console.log('Model: ' + carObject[model])

//use dot notation to set property values
carObject.mileage = 111000;
console.log(carObject);


// In addition to static properties, an object can also contain functions we refer to as methods
const carObject = {
  make: 'Jeep',
  model: 'Wrangler',
  mileage: 110000,
  hasFuel: true,
  
  drive: function(miles) {
    // Inside of an object's method, "this" literally means "this object"
    if (this.hasFuel === true) {
      this.mileage += miles;
      this.hasFuel = false;
      console.log(`${this.make} ${this.model} has driven ${miles} miles! Total mileage is now ${this.mileage}!`);
    } else {
      console.log(`${this.make} ${this.model} has no fuel! Fill up the tank before driving!`);
    }
  },
  
  fillUpTank: function() {
    this.hasFuel = true;
    console.log(`Filling up on gas... ${this.make} ${this.model} now has a full tank!`);
  }
};
carObject.drive(500);
carObject.drive(500);
carObject.fillUpTank();
