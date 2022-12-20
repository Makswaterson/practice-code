// const buttonAdd = document.querySelector('.add');
// console.log(buttonAdd);
// buttonAdd.addEventListener('click', onClick, { once: true });

// function onClick(evt) {
//   // evt.currentTarget.setAttribute('disabled', true);
//   evt.currentTarget.setAttribute('hidden', true);
//   const markup = `<h1>Hello World</h1>`;
//   document.body.insertAdjacentHTML('beforeend', markup);
//   console.log(evt.target);
// }

// const input = document.querySelector('.js-input');
// const buttonAdd = document.querySelector('.add');

// buttonAdd.addEventListener('click', onClick, { once: true });
// input.addEventListener('input', onInput);

// function onInput(evt) {
//   const { value } = evt.currentTarget;
//   if (value.length >= 7) {
//     buttonAdd.removeAttribute('disabled');
//   }
// }

// function onClick(evt) {
//   // evt.currentTarget.setAttribute('disabled', true);
//   evt.currentTarget.setAttribute('hidden', true);
//   const markup = `<h1>Hello World</h1>`;
//   document.body.insertAdjacentHTML('beforeend', markup);
//   console.log(evt.target);
// }

//////////////////////////////////////////////////////////////////////////////////

// const form = document.querySelector('.js-form');
// form.addEventListener('submit', onSubmit);

// function onSubmit(evt) {
//   evt.preventDefault();
//   const data = new FormData(evt.currentTarget);
//   console.log(data);
//   data.forEach(value => console.log(value));
// const {
//   gender: { value: gender },
//   userName: { value: userName },
// } = evt.currentTarget.elements;
// console.log('gender', gender);
// console.log('userName', userName);
// const {gender, userName} = evt.currentTarget.elements;
//     // console.log('userName',userName.value);
//     // console.log('gender',gender.value);
// }

/////////////////////////////////////////////////////////////////////////////////

// const content = document.querySelector('.content');
// let markup = '';
// let stepX = [];
// let stepO = [];
// const win = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
//   [1, 5, 9],
//   [3, 5, 7],
// ];
// let player = 'X';
// for (let i = 1; i <= 9; i++) {
//   markup += `<div class = 'item' data-id='${i}'></div>`;
// }
// content.insertAdjacentHTML('beforeend', markup);

// content.addEventListener('click', onClickGameZone);

// function onClickGameZone(evt) {
//   if (!evt.target.textContent) {
//     const id = Number(evt.target.dataset.id);
//     if (player == 'X') {
//       stepX.push(id);
//       const isWinner = checkWinner(stepX);
//       if (isWinner) {
//         console.log(`${player} is Winner!`);
//         reset();
//         return;
//       }
//     } else {
//       stepO.push(id);
//       const isWinner = checkWinner(stepO);
//       if (isWinner) {
//         console.log(`${player} is Winner!`);
//         reset();
//         return;
//       }
//     }
//     evt.target.textContent = player;
//     player = player === 'X' ? 'O' : 'X';
//   }
// }

// function checkWinner(arr) {
//   const result = win.some(values => values.every(value => arr.includes(value)));
//   return result;
// }

// function reset() {
//   content.innerHTML = markup;
//   player = 'X';
//   stepX = [];
//   stepO = [];
// }

//////////////////////////////////////Хрестики-нулики ...............................

const content = document.querySelector('.content');
let markup = '';
const KEY_X = 'keyX';
const KEY_O = 'keyO';
const CURRENT_PLAYER = 'player';
let stepX = JSON.parse(localStorage.getItem(KEY_X)) || [];
let stepO = JSON.parse(localStorage.getItem(KEY_O)) ?? [];
const win = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
let player = localStorage.getItem(CURRENT_PLAYER) || 'X';
for (let i = 1; i <= 9; i++) {
  markup += `<div class = 'item' data-id='${i}'></div>`;
}
content.insertAdjacentHTML('beforeend', markup);

content.addEventListener('click', onClickGameZone);

function onClickGameZone(evt) {
  if (!evt.target.textContent) {
    const id = Number(evt.target.dataset.id);
    if (player == 'X') {
      stepX.push(id);
      localStorage.setItem(KEY_X, stepX);
      const isWinner = checkWinner(stepX);
      evt.target.textContent = player;
      if (isWinner) {
        console.log(`${player} is Winner!`);
        setTimeout(() => {
          reset();
        }, 500);
        return;
      }
    } else {
      stepO.push(id);
      localStorage.setItem(KEY_O, stepO);
      const isWinner = checkWinner(stepO);
      evt.target.textContent = player;
      if (isWinner) {
        console.log(`${player} is Winner!`);
        setTimeout(() => {
          reset();
        }, 500);
        return;
      }
    }

    player = player === 'X' ? 'O' : 'X';
    localStorage.setItem(CURRENT_PLAYER, 'player');
  }
}

function checkWinner(arr) {
  const result = win.some(values => values.every(value => arr.includes(value)));
  return result;
}

function reset() {
  localStorage.clear();
  content.innerHTML = markup;
  player = 'X';
  stepX = [];
  stepO = [];
}

(function () {
  try {
    [...content.children].forEach(item => {
      const id = Number(item.dataset.id);
      if (stepX.includes(id)) {
        item.textContent = 'X';
      } else if (stepO.includes(id)) {
        item.textContent = 'O';
      }
    });
  } catch (e) {
    console.log('localStorage empty');
  }
})();
