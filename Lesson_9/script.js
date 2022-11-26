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
