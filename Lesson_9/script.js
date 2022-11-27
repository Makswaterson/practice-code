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

// const user = {
//   name: 'Artem',
//   city: 'Lviv',
//   sayHello(year, language) {
//     console.log(
//       `Hello my name is ${this.name} ,I'm from ${this.city},I'm ${year} years old, study ${language}`
//     );
//   },
// };
// user.sayHello(28, 'CSS');

// const den = {
//   name: 'Denys',
//   city: 'Rivne',
// };
// const yulia = {
//   name: 'Yulia',
//   city: 'Ternopil',
// };
// const alex = {
//   name: 'Alex',
//   city: 'Kyiv',
// };

// user.sayHello.call(den, 34, 'HTML');
// user.sayHello.apply(yulia, [22, 'JS']);
// const alexHello = user.sayHello.bind(alex);
// alexHello(23, 'React');
// alexHello(33, 'Node,js');

// ////////////////////////////////////////////////////////////////////////////////////
// Example 1 - Майстерня коштовностей
// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю та розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю із властивості stones.
// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const stone = this.stones.find(({ name }) => name === stoneName);
//     if (stone) {
//       return stone.price * stone.quantity;
//     }
//     return 'Error!';
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600
// console.log(chopShop.calcTotalPrice('qwerty'));

// Example 2 - Телефонна книга
// Виконайте рефакторинг методів об'єкта phonebook щоб код запрацював.
// function generateId() {
//   console.log('hello');
// }
// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },
//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return new Date();
//   },
// };

// phonebook.add({
//   name: 'Mango',
//   email: 'mango@mail.com',
//   list: 'friends',
// }),
//   phonebook.add({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   });
// console.log(phonebook);

// Example 3 - Калькулятор
// Створіть об'єкт calculator із трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.
// const calculator = {
//   a: 0,
//   b: 0,
//   read(a, b) {
//     console.log('a', a);
//     console.log('b', b);
//     // this.a = a;
//     // this.b = b
//     this.a = a || 0; // 0, NaN, null, undefined, "", false
//     this.b = b ?? 0; // null undefined
//   },
//   add() {
//     return this.a + this.b;
//   },
//   mult() {
//     return this.a * this.b;
//   },
// };
// calculator.read(7, 23);
// console.log(calculator.add());
// console.log(calculator.mult());

// const calc = {
//   a: 24,
//   b: 100,
// };

// console.log(calculator.add.call(calc));
