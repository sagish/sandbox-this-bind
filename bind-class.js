class Animal {
  constructor() {
    // this.makeSound = this.makeSound.bind(this);
  }

  makeSound() {
    console.log(this.sound)
  }

  // makeSound = () => {
  //   console.log(this.sound)
  // }
}

class Dog extends Animal {
  constructor() {
    super()
    this.sound = 'woof';
  }
}

class Cat extends Animal {
  constructor() {
    super()
    this.sound = 'meow';
  }
}

(new Cat).makeSound();
(new Dog).makeSound();
(new Cat).makeSound.call(new Dog);
(new Cat).makeSound.bind(Cat).call(new Dog);
