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
class Client {
  #email;
  constructor(login, email) {
    this.login = login;
    this.#email = email;
  }
  get email() {
    return this.#email;
  }
  validation(value) {
    return value.includes('@');
  }
  set email(value) {
    if (this.validation(value)) {
      this.#email = value;
    } else {
      alert('Email is not valid!');
    }
  }
}
const client = new Client('Maks', 'maks.@gmail.com');
console.log(client);
client.email = 'makswewe.@gmail.com';
console.log(client);
