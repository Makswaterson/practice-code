const refs = {
  modal: document.querySelector('#subscription-modal'),
  subscribeBtn: document.querySelector('button[data-subscribe]'),
};
const PROMPT_DELAY = 3000;
const MAX_PROMPT_ATTEMPTS = 3;

let promptCounter = 0;
let hasSubscribed = false;

const intervalId = setInterval(() => {
  if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
    console.log('Зупинка інтервалу');
    clearInterval(intervalId);
    return;
  }
  console.log('Підпишись на розсилку - ' + Date.now());
  promptCounter += 1;
}, PROMPT_DELAY);

/**
 * ЗАВДАННЯ 7
 * Функція countWithDelay приймає 3 аргументи:
 * 1) кількість секунд перед тим як спрацює ф-ція logCount
 * 2) скільки разів повинна відпрацювати logCount
 * 3) затримка між викликами ф-ції
 *
 * logCount повинна логувати кількість викликів
 */

// const countWithDelay = (delay = 0, steps = 0, stepInterval = 0) => {
//   for (let index = 0; index < steps; index++) {
//     logCount(index, delay).then(response => {
//       console.log(response);
//     });
//     delay += stepInterval;
//   }
// };

// countWithDelay(3000, 6, 1000);

// function logCount(index, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(index);
//     }, delay);
//   });
// }
