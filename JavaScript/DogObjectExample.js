const dog = {
  isSleepy: false,
  isHungry: true,
  sound: "Woof!",
  name: "Spot",
  makeSound: function(){
    console.log(this.sound);
  },
  feed: function(){
    console.log(`Feeding ${this.name}...`);
    this.isHungry = false;
    console.log('just fed the dog')
  },
  sleep: function(){
    console.log(`${this.name} is going to sleep...`);
    this.isSleepy = false;
    this.isHungry = true;
    console.log(`${this.name} woke up hungry!`);
  }
};
dog.makeSound();
dog.feed();
dog.sleep();
