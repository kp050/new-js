// oops

// class: blue print to create an object. using a class we can create multiple object.
// object is non-primitive datatype that will store key value pairs

/* class house {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}
let value = new house("david", "red");
console.log(value);
let final = new house("shreya", "blue");
console.log(final); */

/* class house1 {
  constructor(name) {
    this.name = name;
  }
  myhouse() {
    console.log(`my house name is ${this.name}`);
  }
}
let value = new house1("house");
value.myhouse(); */
/* 
// Inheritance
class house2 {
  constructor(name) {
    this.name = name;
  }
  myhouse2() {
    console.log(`my house name is ${this.name}`);
  }
}
class myhouse2 extends house2 {}
let value1 = new myhouse2("david");
value1.myhouse2();

// polymorphism
class mobile {
  buyProduct() {
    console.log(`I am buying a product`);
  }
}
class Apple extends mobile {
  buyProduct() {
    console.log(`I am going to buy Apple mobile`);
  }
}
class Sampsung extends mobile {
  buyProduct() {
    console.log(`buying samsung`);
  }
}
let value = new mobile();
value.buyProduct();
let value11 = new Apple();
value11.buyProduct();

// # is the symbol which is making the variable private.
class bank {
  #balance;
  constructor(balance) {
    this.#balance = balance;
  }
  bankbalance() {
    console.log(`i have a balance of ${this.#balance}`);
  }
}
let v = new bank(1000);
v.bankbalance();
// console.log(v.#balance); // error: private field '#balance' must be declared in an enclosing class
// encapsulation : making the variables private and restrincting the direct access
 */
// OVERRIDING AND OVERLOADING
// overriding
class Bank {
  bankBalance() {
    console.log("my bank balance");
  }
}
class AxisBank extends Bank {
  bankBalance() {
    console.log("my axis bank balance");
  }
}
let v = new AxisBank();
v.bankBalance();

// overloading
class Dl {
  isEligible(name, age) {
    if (age == undefined || age < 18) {
      console.log("not eligibele");
    } else {
      console.log("eligible");
    }
  }
}
let value = new Dl();
value.isEligible("david");
value.isEligible("david", 18);

// super keyword: refers to the parent class and get the required component.
class Bank1 {
  constructor(name) {
    //4
    this.name = name;
  }
}
class Axisbank extends Bank1 {
  constructor(name, city) {
    //2
    super(name); //3
    this.city = city; //5
  }
}
let value1 = new Axisbank("bank", "bangalore"); //1
console.log(value1);

// GET/POST: 