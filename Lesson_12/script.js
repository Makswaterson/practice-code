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

const form = document.querySelector('.js-form');
form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  //   const data = new FormData(evt.currentTarget);
  //   console.log(data);
  //   data.forEach(value => console.log(value));
  const {
    gender: { value: gender },
    userName: { value: userName },
  } = evt.currentTarget.elements;
  console.log('gender', gender);
  console.log('userName', userName);
  // const {gender, userName} = evt.currentTarget.elements;
  //     // console.log('userName',userName.value);
  //     // console.log('gender',gender.value);
}
