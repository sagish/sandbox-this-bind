function makeSound() {
  console.log(this.setTimeout)
}

const dog = {
  sound: 'woof',
  makeSound: makeSound
};

const cat = {
  sound: 'meow',
  makeSound: makeSound,
};

// dog.makeSound();
// cat.makeSound();
// cat.makeSound.call(dog);
// dog.makeSound.bind(cat)();
