// https://dummyjson.com/docs/posts
// // https://jsonplaceholder.typicode.com/posts

// CRUD
// C Create - POST
// R Read   - GET
// U Update - PUT PATCH
// D DELETE - DELETE

// R Read   - GET

const BASE_URL = 'http://localhost:4040';

// function fetchBook() {
//     return fetch(`${BASE_URL}/books`).then(resp => resp.json());
// }

// function fetchBookById(bookId) {
//     return fetch(`${BASE_URL}/books/${bookId}`).then(resp => resp.json());
// }

// fetchBook()
// fetchBookById(2)
// fetchBookById(4)
///////////////////////////////C Create - POST///////////

// function addBook(book) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(book),
//   };
//   return fetch(`${BASE_URL}/books`, options)
//     .then(resp => resp.json())
//     .then(console.log());
// }

// addBook({
//   title: 'Тестова книжка Node.js',
//   author: 'Tom',
//   genres: 'JS',
//   rating: '10',
// });

// addBook({
//   title: 'Тестова книжка JS',
//   author: 'Tomas',
//   genres: 'JS',
//   rating: '9',
// });
//////////////////////////////// U Update - PUT PATCH/////////////////////

// function updateBookById(update, bookId) {
//       const options = {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(update),
//   };
//    return fetch(`${BASE_URL}/books/${bookId}`, options)
//      .then(resp => resp.json())
//      .then(console.log());
// }
//  updateBookById({
//     title: 'Тестова велика книжка Node.js'
//  }, 15)

//  updateBookById({
//     title: 'Тестова велика книжка Next.js'
//  }, 18)

//  updateBookById(
//    {
//      rating: 8,
//      genres: 'JS',
//    },
//    12
// );

// //////////////////////////////////// D DELETE - DELETE/////////////////
// function removeBook(bookId) {
//   const options = {
//     method: 'DELETE',
//   };
//   return fetch(`${BASE_URL}/books/${bookId}`, options)
//     .then(resp => resp.json())
//     .then(console.log());
// }
// removeBook(4);
