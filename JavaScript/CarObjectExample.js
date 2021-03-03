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
