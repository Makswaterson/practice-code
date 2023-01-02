fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=50').then(response =>
  response.json().then(console.log)
);

fetch(
  'https://pixabay.com/api/?key=4823621-792051e21e56534e6ae2e472f&q=yellow+flowers&image_type=photo'
).then(response => response.json().then(console.log));

const url = 'https://newsapi.org/v2/everything?q=cars';
const options = {
  headers: {
    Authorization: '4330ebfabc654a6992c2aa792f3173a3',
  },
}
  .then(response => response.json())
  .then(console.log);
