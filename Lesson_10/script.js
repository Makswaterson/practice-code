// Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я),
// surname (прізвище), rate (ставка за день роботи), days (кількість відпрацьованих
// днів). Також клас повинен мати метод getSalary(), який виводитиме зарплату
// працівника. Зарплата - це добуток (множення) ставки rate на кількість
// відпрацьованих днів days. І метод getFullName() - ім'я та прізвище працівника.

// class Worker {
//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//   }
//   getSalary() {
//     return this.rate * this.days;
//   }
//   get getFullName() {
//     return `${this.surname} ${this.name}`;
//   }
// }
// class Boss extends Worker {
//   constructor(name, surname, rate, days, workers) {
//     super(name, surname, rate, days);
//     this.workers = workers;
//   }
//   getSalary() {
//     return this.rate * this.days * this.workers;
//   }
// }

// Напишіть новий клас Boss, цей клас успадковується від класу Worker та минулого
// завдання. З'являється нові властивості: workers - кількість працівників.
// І зарплата вважається інакше: добуток (множення) ставки rate на кількість
// відпрацьованих днів і кількість працівників.

// const boss = new Boss('Іван', 'Іванов', 10, 31, 10);
// console.log(boss.name); //Виведе 'Іван'
// console.log(boss.surname); //Виведе 'Іванов'
// console.log(boss.getFullName); //Виведе 'Іванов Іван'
// console.log(boss.rate); //Виведе 10
// console.log(boss.days); //Виведе 31
// console.log(boss.workers); //Виведе 10
// console.log(boss.getSalary()); //Виведе 3100 - тобто 10 * 31 * 10

// const worker = new Worker('Іван', 'Іванов', 10, 31);
// console.log(worker.name); //Виведе 'Іван'
// console.log(worker.surname); //Виведе 'Іванов'
// console.log(worker.getFullName); //Виведе 'Іванов Іван'
// console.log(worker.rate); //Виведе 10
// console.log(worker.days); //Виведе 31
// console.log(worker.getSalary()); //Виведе 310 - тобто 10 * 31

/*
  Клієнт
  Напиши клас Client який створює об'єкт із властивостями login та email.
  login має бути суспільною властивістю, а email приватним.
  Доступ до email зроби через геттер та сетер.
  Перед тим як змінити емейл, у сеттері потрібно викликати приватний метод, який валідуватиме імейл (наявність собачки та крапки).
  Якщо імейл невалідний – нічого не робити і вивести в консоль 'Email is not valid!'
*/
// class Client {
//   #email;
//   constructor(login, email) {
//     this.login = login;
//     this.#email = email;
//   }
//   get email() {
//     return this.#email;
//   }
//   validation(value) {
//     return value.includes('@')&& value.includes('.') && value.length > 10;
//   }
//   set email(value) {
//     if (this.validation(value)) {
//       this.#email = value;
//     } else {
//       alert('Email is not valid!');
//     }
//   }
// }
// const client = new Client('Maks', 'maks.@gmail.com');
// console.log(client);
// client.email = 'makswewe.@gmail.com';
// console.log(client);

// const parent = {
//   name: 'parent',
//   sayHello() {
//     console.log(`I'm  ${this.name}`);
//   },
// };
// const obj = Object.create(parent);
// const copyObj = Object.assign(parent);
// console.log('obj', obj);
// console.log('copyObj', copyObj);
// copyObj.age = 22;
// console.log('copyObj', copyObj);
// console.log(parent);

// Object.create(parent) i Object.assign(parent) залежні об'єкти в яких змінюється обєкт і прототайп через посилання ...

// class User {
//   static counter = 0;
//   static addUser() {
//     // User.counter +=1
//     this.counter += 1;
//     console.log(this.counter);
//   }
//   #email;
//   constructor(name = 'Initail value', password, email) {
//     this.#email = email;
//     this.name = name;
//     this.password = password;
//     User.addUser();
//   }
//   sayHello() {
//     console.log(`Hello I'm ${this.name}`);
//   }
//   createValue(value) {
//     this.value = value;
//   }
//   #checkEmail(value) {
//     const response = value.includes('@') && value.includes('.') && value.length > 10;
//     return response;
//   }

//   get emailValue() {
//     console.log(this.#email);
//   }

//   set emailValue(newValue) {
//     if (this.#checkEmail(newValue)) {
//       this.#email = newValue;
//     } else {
//       alert('Invalid email 😢');
//     }
//   }
// }

// class Admin extends User {
//   constructor(name, password, email, secretPassword) {
//     super(name, password, email);
//     this.secretPassword = secretPassword;
//   }
//   deleteUser(email) {
//     console.log(email);
//   }
// }

// const artem = new User('Artem', 'qwerty', 'test@gmail.com');
// const dima = new Admin('Dima', 'ytrewq', 'test@gmail.com', '23232323');
// console.log(dima.sayHello());
// const maks = new User('Maks', 'poiuye');
// console.log(artem.name);
// artem.name = 'Oleg';
// artem.emailValue;
// artem.emailValue = 'asa';
// artem.emailValue = '1234asdfgfhkjl@gm.mm';
// artem.#checkEmail()
// console.log(artem);

// // Example 1 - Блогер
// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем на яких спеціалізується блогер
// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який, повертає рядок: User ${пошта} is ${вік} years old and has ${кількість постів} posts.

// Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

// class User {
//   constructor({ name, age, numberOfPosts, topics }) {
//     this.name = name;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }
//   getInfo() {
//     return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//   }
//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const mango = new User({
//   name: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });
// console.log(mango);

// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new User({
//   name: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(12);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

//
// / Оператор ~
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT
// Example 2 - Сховище
// Напиши клас Storage який створює об'єкти для керування складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме його властивість items.



// // Додай методи класу:

// // getItems() - повертає масив товарів.
// // addItem(item) - отримує новий товар і додає його до поточних.
// // removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// // const items = storage.productItems;
// // console.log (items); // [ '🍎', '🍋', '🍇', '🍑' ]

// // storage.productItems = '🍌';
// // storage.productItems = '🍋';
// // console.log(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]