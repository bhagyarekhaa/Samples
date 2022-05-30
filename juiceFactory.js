class JuiceFactory {
  constructor(name) {
    if (name === "mango") return new Mango(name);
    if (name === "orange") return new Orange(name);
    if (name === "milk") return new Milk(name);
    if (name === "soda") return new Soda(name);
  }
}

class Juice {
  constructor(name) {
    this.name = name;
    this.makeJuice = this.makeJuice.bind(this);
    this.orderJuice = this.orderJuice.bind(this);
    this.setIngredients = this.setIngredients.bind(this);
  }
  makeJuice() {}
  orderJuice(quantity) {}
  setIngredients() {}
}

class Mango extends Juice {
  orderJuice(quantity) {
    console.log(`You have ordered ${quantity} glass(es) of Mango juice`);
  }
  makeJuice(name) {
    console.log(`Preparing ${name} juice`);
  }
  setIngredients(ing1, ing2, ing3) {
    console.log(`ingredients in mango juice are ${ing1}, ${ing2}, ${ing3} `);
  }
}

class Orange extends Juice {
  orderJuice(quantity) {
    console.log(`You have ordered ${quantity} glass(es) of Orange juice`);
  }
  makeJuice(name) {
    console.log(`Preparing ${name} juice`);
  }
  setIngredients(ing1, ing2, ing3) {
    console.log(`ingredients in orange juice are ${ing1}, ${ing2}, ${ing3} `);
  }
}

class Milk extends Juice {
  orderJuice(quantity) {
    console.log(`You have ordered ${quantity} glass(es) of milk`);
  }
  makeJuice(name) {
    console.log(`Preparing ${name} for you`);
  }
  setIngredients(ing1, ing2) {
    console.log(`ingredients in milk are ${ing1}, ${ing2}`);
  }
}

class Soda extends Juice {
  orderJuice(quantity) {
    console.log(`You have ordered ${quantity} glass(es) of soda`);
  }
  makeJuice(name) {
    console.log(`Here's your ${name}`);
  }
}

const mango = new JuiceFactory("mango");
const orange = new JuiceFactory("orange");
const milk = new JuiceFactory("milk");
const soda = new JuiceFactory("soda");

mango.makeJuice("mango");
mango.orderJuice(3);
mango.setIngredients("mango", "milk", "sugar");
orange.makeJuice("orange");
orange.orderJuice(2);
orange.setIngredients("orange", "milk", "sugar");
milk.makeJuice("milk");
milk.orderJuice(1);
milk.setIngredients("milk", "sugar");
soda.makeJuice("soda");
soda.orderJuice(1);
