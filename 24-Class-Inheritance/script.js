class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`I'am ${this.name}`)
  }
}

// const anumal = new Animal("Brad")
// const cat = new Animal("Brad")
// const shark = new Animal("Brad")

// anumal.speak();

class Dog extends Animal {
  constructor(name, owner) {
    super(name)
    this.owner = owner;
  }

  speak() {
    console.log('Bark');
  }
}

class Cat extends Animal {
  speak() {
    console.log('Meow');
  }
}

const dog = new Dog('Goga', "Vova");
const cat = new Cat("Cat");
// console.log(cat.speak());
// dog.speak();

class Person {
  constructor(name) {
    this.name = name;
  }
}

class Janitor extends Person {
  constructor(name, numberOfMops) {
    super(name)
    this.numberOfMops = numberOfMops;
  }

  #internalOnlyVariable = true
  
  #cleaningProductCount = 10

  set cleaningProductCount(value) {
    if(value > 5) {
      this.#cleaningProductCount = value
    }
  }

  clean() {
    this.#helperFunction()
    // if(this.#internalOnlyVariable === true) {
    //   console.log('Hi')
    // }
    console.log(`Cleaned with ${this.numberOfMops} mops and ${this.#cleaningProductCount} cleaning prodicts`);
  }

  #helperFunction () {
    console.log('help')
  }
}

class SuperJanitor extends Janitor {
  #cleaningProductCount = 100
}

const janitor = new SuperJanitor("Jerry", 5)
// janitor.cleaningProductCount = 7
console.log(janitor.clean());
