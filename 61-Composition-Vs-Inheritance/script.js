import { WalkerMixin, FlyerMixin } from './mixins.js'

class Animal {
  constructor(name) {
    this.name = name
  }

  attack() {
    console.log(`${this.name} attacked`)
  }

  sleep() {
    console.log(`${this.name} slept`)
  }
}

// class Bear extends FlyerMixin(WalkerMixin(Animal)) {
//   walk() {
//     console.log(`${this.name} walked`)
//   }
// }

class Bear extends WalkerMixin(Animal) {}


class Shark extends Animal {
  swim() {
    console.log(`${this.name} swam`)
  } 
}

// class Bird extends Animal {
//   fly() {
//     console.log(`${this.name} flew`)
//   } 
// }

class Bird extends FlyerMixin(Animal) {}

class Sharknado extends Shark {
  fly() {
    console.log(`${this.name} flew`)
  }
}

function createBear(name) {
  const bear = { name }
  return { ... bear, ...attacker(bear), ...sleeper(bear), ...walker(bear) }
}

function createSharknado(name) {
  const aminal = { name }
  return { 
    ... aminal, 
    ...attacker(aminal), 
    ...sleeper(aminal), 
    ...swimmer(aminal), 
    ...flyer(aminal)
  }
}


// const bear = new Bear("Bear")
const bear = createBear("Bear")
bear.attack()
bear.walk()
bear.sleep()

const charknado = createSharknado("Sharknado")
charknado.sleep()
charknado.swim()
charknado.fly()

const shark = new Shark("Shark")
shark.attack()
shark.swim()
shark.sleep()

const bird = new Bear("Bird")
bird.attack()
bear.fly()
bear.sleep()
