// https://dummyjson.com/docs/posts
// // https://jsonplaceholder.typicode.com/posts

// CRUD
// C Create - POST
// R Read   - GET
// U Update - PUT PATCH
// D DELETE - DELETE

// R Read   - GET

// const BASE_URL = 'http://localhost:4040';

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

// //////////////////////////////////////////////////////////////

const refs = {
  list: document.querySelector('.js-contacts-container'),
  spiner: document.querySelector('.js-spinner'),
  //   load: document.querySelector('[data-load]'),
  //   form: document.querySelector('.js-contact-form'),
  //   addBtn: document.querySelector('.js-add-contact'),
  //   modalForm: document.querySelector('[data-modal]'),
  //   closeBtn: document.querySelector('[data-modal-close]'),
  //   updateBtn: document.querySelector('.js-update'),
};

const BASE_URL = 'https://62d459315112e98e484e5213.mockapi.io';

const getContacts = () => {
  return fetch(`${BASE_URL}/contacts`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
// const getContactsById = id => {
//   return fetch(`${BASE_URL}/contacts/${id}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// };
// getContactsById(2).then(data => {
//   const markup = createContact(data);
//   console.log(markup);
//   refs.list.innerHTML = markup;
// });

getContacts()
  .then(data => {
    const markup = [...data].reverse().map(createContact);
    refs.list.insertAdjacentHTML('beforeend', markup.join());
  })
  .catch(error => {
    console.log(error);
  });

function createContact({ name, phone, email, id, createdAt }) {
  return /*HTML*/ `<div data-id="${id}" class="col-md-6 js-contact-card">
      <div class="card mb-2 shadow">
        <div class="d-flex justify-content-between pb-3 border-bottom">
          <div class="d-flex flex-row align-items-center gap-1">
            <div class="icon">
               <span class="material-icons-outlined"> contacts </span>
            </div>
            <div class="ms-2 c-details">
              <h2 class="h5 mb-0 fw-bold">${id} - ${name}</h2>
              <span>${createdAt}</span>
            </div>
          </div>
          <button type="button" class="btn-close" aria-label="Close"></button>
        </div>
        <div class="mt-2">
          <ul class="list-group list-group-flush">
            <li class="list-group-item d">
              <a
                href="tel:+${phone}"
                class="d-flex align-items-center text-secondary text-decoration-none nav-link"
                ><span class="material-icons-round me-2"> phone </span> ${phone}</a
              >
            </li>
            <li class="list-group-item">
              <a
                href="mailto:${email}"
                class="d-flex align-items-center text-secondary text-decoration-none nav-link"
                ><span class="material-icons-round me-2">
                  alternate_email
                </span>
                ${email}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>`;
}

// const opts = {
//   lines: 20, // The number of lines to draw
//   length: 53, // The length of each line
//   width: 17, // The line thickness
//   radius: 45, // The radius of the inner circle
//   scale: 1.35, // Scales overall size of the spinner
//   corners: 1, // Corner roundness (0..1)
//   speed: 1, // Rounds per second
//   rotate: 10, // The rotation offset
//   animation: 'spinner-line-fade-more', // The CSS animation name for the lines
//   direction: 1, // 1: clockwise, -1: counterclockwise
//   color: '#49d0a3', // CSS color or array of colors
//   fadeColor: 'transparent', // CSS color or array of colors
//   top: '48%', // Top position relative to parent
//   left: '50%', // Left position relative to parent
//   shadow: '0 0 1px transparent', // Box-shadow for the lines
//   zIndex: 2000000000, // The z-index (defaults to 2e9)
//   className: 'spinner', // The CSS class to assign to the spinner
//   position: 'absolute', // Element positioning
// };
// const spinner = new Spinner(opts);

// const spinner = new Spinner(opts).spin(refs.spiner);

//  function spinerPlay() {
//   spinner.spin(refs.spiner);
//   refs.load.classList.remove('is-hidden');
// }
//  function spinerStop() {
//   refs.load.classList.add('is-hidden');
//   spinner.stop();
// }
