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

// class Storage {
//   constructor(arr) {
//     this.items = arr;
//   }
//   get productItems() {
//     return this.items;
//   }
//   set productItems(item) {
//     if (!this.items.includes(item)) {
//       this.items.push(item);
//     }
//   }
//   removeItem(item) {
//     //  if (this.items.includes(item)) {
//     //    const idx = this.items.indexOf(item)
//     //    this.items.splice(idx,1)
//     //  }
//     const idx = this.items.indexOf(item);
//     // х= 0 Якщо індекс 0(~-1) тоді -(х +0),Якщо індекс -1(~0) тоді -(х +1)
//     // -(idx + 1) === ~idx
//     if (!!~idx) {
//       this.items.splice(idx, 1);
//     }
//   }
// }

// // // Додай методи класу:

// // getItems() - повертає масив товарів.
// // // addItem(item) - отримує новий товар і додає його до поточних.
// // // removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// // const items = storage.productItems;
// // console.log(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// // storage.productItems = '🍌';
// // storage.productItems = '🍋';
// // console.log(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

// Example 3 - User
// Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email, доступ до яких зроби через гетер та сетер login та email.

// class User {
//   #login;
//   #email;
//   constructor({ email, login }) {
//     this.#email = email;
//     this.#login = login;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(value) {
//     this.#email = value;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(value) {
//     this.#login = value;
//   }
// }

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie

// Example 4 - Нотатки
// Напиши клас Notes який керує колекцією нотаток у властивості items. Замітка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };
//   constructor(arr) {
//     this.items = arr;
//   }
//   addNote(note) {
//     if (!this.items.includes(note)) {
//       this.items.push(note);
//     }
//   }
//   removeNote(text) {
//     if (this.items.includes(text)) {
//       const idx = this.items.indexOf(text);
//       this.items.splice(idx, 1);
//     }
//   }
//   updatePriority(text, newPriority) {
//     if (this.items.includes(text)) {
//       this.items.priority = newPriority;
//     }
//   }
// }

// Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).

// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя перша замітка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: 'Моя друга замітка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя перша замітка');
// console.log(myNotes.items);

// myNotes.updatePriority('Моя друга замітка', Notes.Priority.HIGH);
// console.log(myNotes.items);

// Example 5 - Toggle
// Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За замовчуванням значення властивості on повинно бути false.

// class Toggle {
//   constructor(obj) {
//     this._on = obj;
//   }
//   get on() {
//     return this._on;
//   }
//   set on(newOn) {
//     this._on = newOn;
//   }
// }

// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');

// https://www.freecodecamp.org/ukrainian/learn/javascript-algorithms-and-data-structures/#basic-javascript
// __________________________________________ //
// -----------------------------------------TASK 1------------------------------------------//
// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультета
// 3 Створити метод об'єкту який буде виводити ім'я факультету в якого більше очків

// const hogvarts = {
//   griffindor: [
//     {
//       name: 'Harry',
//       points: 17,
//     },
//     {
//       name: 'Hermiona',
//       points: 19,
//     },
//     {
//       name: 'Ron',
//       points: 14,
//     },
//   ],
//   sliserin: [
//     {
//       name: 'Draco',
//       points: 17,
//     },
//     {
//       name: 'Goyl',
//       points: 14,
//     },
//     {
//       name: 'Crabbe',
//       points: 5,
//     },
//   ],
//   getStudentsOfFaculty(facultyName) {
//     return this[facultyName].map(student => student.name);
//   },
//   getStudentsOfPoints(facultyName) {
//     return this[facultyName].reduce((acc, student) => (acc += student.points), 0);
//   },
//   getStudentsOfWinner(){
//     this['griffindor'].reduce((acc, student) => (acc += students.points), 0) >
//     this['sliserin'].reduce((acc, student) => (acc += students.points), 0)
//       ? 'Winner is Griffindor'
//       : 'Winner is Sliserin';
//   }
// };
// hogvarts.getStudentsOfFaculty('griffindor');
// hogvarts.getStudentsOfPoints('sliserin');
// hogvarts.getStudentsOfWinner();

// -----------------------------------------TASK 2------------------------------------------//
// Створити функцію яка буде приймати 2 параметра.
// 1 Масив студентів.
// 2 Мову програмування яку потрібно знайти.
// Функція повертає масив імен користувачів які вивчають цю мову.

// const students = [{
//     name: `Lika`,
//     language: `html`

// }, {
//     name: `Anton`,
//     language: `css`

// }, {
//     name: `Andriy`,
//     language: `js`

// }, {
//     name: `Vova`,
//     language: `html`

// }, {
//     name: `Alina`,
//     language: `css`

// }, {
//     name: `Egor`,
//     language: `js`

// }, {
//     name: `Aleksandr`,
//     langunage: `html`

// }, {
//     name: `Taras`,
//     language: `css`

// }, {
//     name: `Ivan`,
//     language: `js`

// }, {
//     name: `Make`,
//     language: `html`

// },];

// getStudentsLanguage(stud, lang) {
//   const studLang = students
//   .map(student => student.name)
//   .filter(student => student.language[`html`])

// }
// console.log(getStudentsLanguage(studLang))

// -----------------------------------------TASK 7------------------------------------------//
// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив
// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// а ті обє'кти в яких айді співпав видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно)

// const products = [
//   {
// id: 'sku1',
//     qty: 1,
//   },
//   {
//     id: 'sku2',
//     qty: 2,
//   },
//   {
//     id: 'sku3',
//     qty: 3,
//   },
//   {
//     id: 'sku1',
//     qty: 6,
//   },
//   {
//     id: 'sku1',
//     qty: 8,
//   },
//   {
//     id: 'sku2',
//     qty: 19,
//   },
//   {
//     id: 'sku4',
//     qty: 1,
//   },
// ];

// function foo(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(array[i]);
//     for (let j = i + 1; j < array.length; j += 1) {
//       console.log(array[j]);
//       if (array[i].id === array[j].id) {
//         array[i].qty += array[j].qty;
//         array.splice(j, 1);
//         j -= 1;
//       }
//     }
//   }
// }
// foo(products);
// console.log(products);
