// https://the-one-api.dev/

// const KEY = 'XJlq9OFMcHAy8pAQK7xj';
// const BASE_URL = 'https://the-one-api.dev/v2';

// const list = document.querySelector('.js-list');
// const load = document.querySelector('.js-load');

// let page = 1;

// load.addEventListener('click', onLoadBtn);

// function ringsApi(page = 1) {
//   const options = {
//     headers: {
//       Authorization: `Bearer ${KEY}`,
//     },
//   };
//   const resp = fetch(`${BASE_URL}/character?limit=300&page=${page}`, options).then(resp => {
//     if (!resp.ok) {
//       throw new Error(resp.textStatus);
//     }
//     return resp.json();
//   });

//   return resp;
// }
// ringsApi()
//   .then(({ docs }) => {
//     createMarkup(docs);
//     load.hidden = false;
//   })
//   .catch(error => console.error(error));

// function createMarkup(arr) {
//   const markup = arr
//     .map(
//       ({ name, race }) =>
//         `<li class="item" >
//     <h2>
//         Name:${name}
//     </h2>
//     <h3>Race:${race}</h3>
// </li>`
//     )
//     .join('');
//   list.insertAdjacentHTML('beforeend', markup);
//   console.log(markup);
// }

// function onLoadBtn() {
//   page += 1;
//   ringsApi(page)
//     .then(({ docs, page, pages }) => {
//       createMarkup(docs);
//       if (page === pages) {
//         load.hidden = true;
//       }
//     })
//     .catch(error => console.error(error));
// }

////////////////////////Infinity scroll ////////////////////////////////////

const KEY = 'XJlq9OFMcHAy8pAQK7xj';
const BASE_URL = 'https://the-one-api.dev/v2';
const options = {
  root: null,
  rootMargin: '300px',
  threshold: 1.0,
};

const observer = new IntersectionObserver(onInfinityLoad, options);

const list = document.querySelector('.js-list');
const guard = document.querySelector('.js-guard');

let page = 1;

function ringsApi(page = 1) {
  const options = {
    headers: {
      Authorization: `Bearer ${KEY}`,
    },
  };
  const resp = fetch(`${BASE_URL}/character?limit=300&page=${page}`, options).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.textStatus);
    }
    return resp.json();
  });

  return resp;
}
ringsApi()
  .then(({ docs }) => {
    createMarkup(docs);
    observer.observe(guard);
  })
  .catch(error => console.error(error));

function createMarkup(arr) {
  const markup = arr
    .map(
      ({ name, race }) =>
        `<li class="item" >
    <h2>
        Name:${name}
    </h2>
    <h3>Race:${race}</h3>
</li>`
    )
    .join('');
  list.insertAdjacentHTML('beforeend', markup);
}

function onInfinityLoad(entries, observer) {
  console.log(entries);
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      page += 1;
      ringsApi(page).then(({ docs, page, pages }) => {
        createMarkup(docs);
        if (page == pages) {
          observer.unobserve(guard);
        }
      });
    }
  });
}
