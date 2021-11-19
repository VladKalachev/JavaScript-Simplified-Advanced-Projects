export const WalkerMixin = superclass => class extends superclass {
  walk() {
    console.log(`${this.name} walked`)
  }
}

export const FlyerMixin = superclass => class extends superclass {
  fly() {
    console.log(`${this.name} flew`)
  }
}

const walker = ({ name }) => ({
  walk() {
    console.log(`${name} walked`)
  }
})

const flyer = ({ name }) => ({
  fly() {
    console.log(`${name} flew`)
  }
})

const swimmer = ({ name }) => ({
  swim() {
    console.log(`${name} swam`)
  }
})

const attacker = ({ name }) => ({
  attack() {
    console.log(`${name} attaked`)
  }
})

const sleeper = ({ name }) => ({
  sleep() {
    console.log(`${name} slept`)
  }
})
