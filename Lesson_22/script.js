// https://swapi.dev/

// async function foo() {
//   const notAwait = fetch('https://swapi.dev/api/people/2/');
//   console.log('notAwait', notAwait);
//   const withAwait = await fetch('https://swapi.dev/api/people/2/');
//   const response = await withAwait.json();
//   console.log(withAwait);
// }
// foo();

//  try catch

// async function foo() {
//   try {
//     const response = await fetch('https://swapi.dev/api/people/2/');
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     const data = await response.json();

//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// foo();

// then catch

// async function foo() {
//   const response = await fetch('https://swapi.dev/api/people/2/');
//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }
//     const data = await response.json();
// return data;
//   return await response.json();
// }
// foo()
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

//////////////////////////////////////////////////////////////

// const list = document.querySelector('.js-list');
// async function foo() {
//   try {
//     const response = await fetch('https://swapi.dev/api/people/2/');
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     const data = await response.json();
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// }
// async function boo() {
//   try {
//     const test = await foo();
//     list.innerHTML = `<li><h2>${test.name}</h2></li>`;
//   } catch (error) {
//     console.log(error);
//   }
// }
// boo();

// Послідовні запити
// const list = document.querySelector('.js-list');
// async function foo() {
//   try {
//     const response1 = await fetch('https://swapi.dev/api/people/1/');
//     const response2 = await fetch('https://swapi.dev/api/people/2/');
//     const response3 = await fetch('https://swapi.dev/api/people/3/');
//     const response4 = await fetch('https://swapi.dev/api/people/4/');
//     // if (!response.ok) {
//     //   throw new Error(response.statusText);
//     // }
//     const data1 = await response1.json();
//     const data2 = await response2.json();
//     const data3 = await response3.json();
//     const data4 = await response4.json();
//     const arr = [data1, data2, data3, data4];
//     console.log(arr);
//     console.log('data1', data1);
//     console.log('data2', data2);
//     console.log('data3', data3);
//     console.log('data4', data4);
//   } catch (err) {
//     console.log(err);
//   }
// }
// foo();

// Паралельні запити
// async function foo() {
//   const heroes = [1, 2, 3, 4];
//   const promises = heroes.map(async hero => await fetch(`https://swapi.dev/api/people/${hero}/`));

//   const responses = await Promise.all(promises);
//   responses.forEach(async item => {
//     if (!item.ok) {
//       throw new Error();
//     }
//     const response = await item.json();
//     console.log(response);
//   });
//   console.log(responses);
// }
// foo();

// async function foo() {
//   const heroes = [1, 2, 3, 4];
//   const promises = heroes.map(async hero => await fetch(`https://swapi.dev/api/people/${hero}/`));

//   const responses = await Promise.allSettled(promises);
//   responses.forEach(item => {
//     if (item.status === 'fulfilled') {
//     }
//   });
//   console.log(responses);
// }
// foo();

///////////////////////////////////////////////

const str = 'jdfsyufguiagfoshcfuasgofv';

const resp = str.split('').reduce((acc, item) => {
  if (item in acc) {
    //key in object
    acc[item] += 1;
  } else {
    acc[item] = 1;
  }
  return acc;
}, {});

console.log(resp);

// https://learn.javascript.ru/map-set
