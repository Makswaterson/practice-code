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

fetch(
  'https://api.openweathermap.org/data/2.5/weather?lat=50&lon=21&appid=95632b02f9162f375a368971925f5209&units=metric'
)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    createMarkup(data);
  })
  .catch(error => {
    console.log(error.message);
  });

function createMarkup({ weather, main, sys, name }) {
  console.log(weather[0].main);
  console.log(weather[0].description);
  console.log(weather[0].icon);
  console.log(main.temp);
  console.log(main.feels_like);
  console.log(main.temp_min);
  console.log(main.temp_max);
  console.log(new Date(sys.sunrise * 1000));
  console.log(new Date(sys.sunset * 1000));
}

return /*html*/ `<div class="weather__card">
      <h2 class="city-name">${name}</h2>
      <ul class="weather-info list">
          <li class="weather-info-item">
              <p class="temp">Температура: ${main.temp} <sup>&#176;</sup>С</p>
          </li>
          <li class="weather-info-item">
              <p class="feels-like-temp">Відчувається як: ${main.feels_like} <sup>&#176;</sup>С</p>
          </li>
          <li class="weather-info-item">
              <p class="sunrise-time">Схід сонця: ${sunrise}</p>
          </li>
          <li class="weather-info-item">
              <p class="sunset-time">Захід сонця: ${sunset}</p>
          </li>
          <li class="weather-info-item">
              <p class="clouds">Хмарність: ${clouds.all}%</p>
          </li>
          <li><img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="${weather[0].description}" /></li>
      </ul>
  </div>`;
