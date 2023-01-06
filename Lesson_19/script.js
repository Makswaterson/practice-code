// fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=50').then(response =>
//   response.json().then(console.log)
// );

// fetch(
//   'https://pixabay.com/api/?key=4823621-792051e21e56534e6ae2e472f&q=yellow+flowers&image_type=photo'
// ).then(response => response.json().then(console.log));

// const url = 'https://newsapi.org/v2/everything?q=cars';
// const options = {
//   headers: {
//     Authorization: '4330ebfabc654a6992c2aa792f3173a3',
//   },
// };
// fetch(url, options)
//   .then(response => response.json())
//   .then(console.log);

//////////////////////////////////////////////////////////////////////////////////////

// 94a040c94bab4dcabf9130808222712
// https://www.postman.com/downloads/

// const response = fetch(`http://api.weatherapi.com/v1/forecast.json?key=94a040c94bab4dcabf9130808222712&q=Lviv&days=5`);
// response.then(resp => resp.json()).then(data => console.log(data))

const form = document.querySelector('.js-search');
const list = document.querySelector('.js-list');

const errorRequest =
  'https://global.discourse-cdn.com/brave/original/3X/b/2/b25ce7b5ef1396e782cee4f7bbffaefd7f9d3b49.jpeg';
const emptyValue =
  'https://www.shutterstock.com/image-illustration/no-value-red-rubber-stamp-260nw-426853699.jpg';

form.addEventListener('submit', onSearch);

function onSearch(evt) {
  evt.preventDefault();
  const { query, days } = evt.currentTarget;
  if (query.value) {
    console.log(query.value, days.value);
    weatherApi(query.value, days.value)
      .then(data => createMarkup(data))
      .catch(error => createErrorMessage(error, errorRequest));
  } else {
    createErrorMessage('Empty search value!', emptyValue);
  }
}

function weatherApi(city, days) {
  const BASE_URL = 'http://api.weatherapi.com/v1';
  const key = '94a040c94bab4dcabf9130808222712';
  return fetch(`${BASE_URL}/forecast.json?key=${key}&q=${city}&days=${days}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function createMarkup({ forecast: { forecastday } }) {
  const markup = forecastday.map(
    ({
      date,
      day: {
        avgtemp_c: avg,
        condition: { text, icon },
      },
    }) => `<li>
  <img src="${icon}" alt="${text}">
    <h2>Дата:${date}</h2>
      <h3>Температура:${avg}</h3>
    <span>${text}</span>
  </img>
</li>`
  );
  list.innerHTML = markup.join('');
}

function createErrorMessage(error, img) {
  const markup = `<li>
    <h2>${error}</h2>
    <img src="${img}" alt="${error}" width="300">
</li>`;
  list.innerHTML = markup;
}
