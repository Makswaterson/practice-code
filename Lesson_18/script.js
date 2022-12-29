// Мікро процеси мають БІЛЬШИЙ пріорітет
// 1. Promise
// 2. Observer

// Макро процеси мають МЕНЬШИЙ пріорітет
// 1. setTimeout
// 2. setInterval
// 3. setImmediate
// 4. requestAnimationFrame

// console.log('1');

// setTimeout(() => {
//     console.log('2')
// }, 0)
// Promise.resolve("3").then(value => console.log(value))

// console.log('4');

// // Відповідь 1,4,3,2

const container = document.querySelector('.js-container');
const start = document.querySelector('.js-start');

start.addEventListener('click', onClick);

function onClick() {
  const arr = [];
  const childLength = container.children.length;
  for (let index = 0; index < childLength; index++) {
    const item = container.children[index];
    item.textContent = '';
    createPromise('🤩', '🤐', index * 500)
      .then(win => {
        markField(item, win);
        arr.push(1);
      })
      .catch(lose => {
        markField(item, lose);
        arr.push(0);
      })
      .finally(() => {
        setTimeout(() => {
          if (arr.length === childLength) {
            const Winner = arr.every(item => item);
            if (Winner) {
              alert('Winner');
            } else {
              alert('Loser');
            }
          }
        }, 100);
      });
  }
}

function markField(item, smile) {
  item.textContent = smile;
}

function createPromise(win, lose, delay) {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    setTimeout(() => {
      if (random > 0.5) {
        resolve(win);
      } else {
        reject(lose);
      }
    }, delay);
  });
}
