//  Оператор ??
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

// 'use strict'

// const arr = [1,2,3];

// console.log(arr);
// 1. Завжди дивимось на тип функції.
// 2. Якщо функці declaration або expresion this визначаємо тим хто нас викликав
// 3. Arrow бере батьківський this (але this може бути присутній лише в функції)

// const arrow = () => {
//   console.log(this);
// };
// arrow();

// const obj = {
//   name: 'USER',
//   myTHIS: this,
//   // arrow: ()=>{
//   //     console.log(this);
//   // }
//   //   customArrow: {
//   //     inCustomArrow: 'Hello from custom arrow',
//   //     arrow: () => {
//   //       console.log(this);
//   //     },
//   //   },

//   //   custom: {
//   //     inCustom: 'Hello from custom',
//   //     foo() {
//   //       console.log(this);
//   //     },
//   //   },
//   // };

//   customForArrow: {
//     inCustom: 'Hello from custom for Arrow',
//     foo() {
//       console.log('declaration', this);
//       const arrow = () => {
//         console.log('in arrow function', this);
//       };
//       arrow();
//     },
//   },
// };

// function NameMe(first, last) {
//   this.firstName = first;
//   this.lastName = last;

//   return {
//     firstName: this.firstName,
//     lastName: this.lastName,
//     name: this.firstName + ' ' + this.lastName,
//   };
// }

// var n = new NameMe('John', 'Doe');
// console.log(n.firstName); //Expected: John
// console.log(n.lastName); //Expected: Doe
// console.log(n.name); //Expected: John Doe

//Створивши клас NamedOne, яка приймає ім’я та прізвище як параметри та повертає
//об’єкт із властивостями firstName, lastName і fullName ( = firstName + пробіл +
//lastName ), які мають бути доступними.
// class NamedOne {
//   constructor(firstName, lastName) {
//     this._firstName = firstName;
//     this._lastName = lastName;
//   }
//   get firstName() {
//     return this._firstName;
//   }
//   get lastName() {
//     return this._lastName;
//   }
//   get fullName() {
//     return this._firstName + '' + this._lastName;
//   }
// }
// var namedOne = new NamedOne('Naomi', 'Wang');
// console.log(namedOne.firstName); // -> "Naomi"
// console.log(namedOne.lastName); // -> "Wang"
// console.log(namedOne.fullName); // -> "Naomi Wang"

// Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// product.showPrice();

// Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(action) {
//   action.call(product);
// }

// callAction(product.showPrice);

const user = {
  name: 'Artem',
  city: 'Lviv',
  sayHello(year, language) {
    console.log(
      `Hello my name is ${this.name} ,I'm from ${this.city},I'm ${year} years old, study ${language}`
    );
  },
};
user.sayHello(28, 'CSS');

const den = {
  name: 'Denys',
  city: 'Rivne',
};
const yulia = {
  name: 'Yulia',
  city: 'Ternopil',
};
const alex = {
  name: 'Alex',
  city: 'Kyiv',
};

user.sayHello.call(den, 34, 'HTML');
user.sayHello.apply(yulia, [22, 'JS']);
const alexHello = user.sayHello.bind(alex);
alexHello(23, 'React');
alexHello(33, 'Node,js');
