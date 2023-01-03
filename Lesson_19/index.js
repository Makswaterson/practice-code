const weatherWrapperRef = document.querySelector('.weather__wrapper');

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
    const markup = createMarkup(data);
    weatherWrapperRef.innerHTML = markup;
    console.log(markup);
  })
  .catch(error => {
    console.log(error.message);
  });

function createMarkup({ weather, main, sys, name, clouds }) {
  console.log(weather[0].main);
  console.log(weather[0].description);
  console.log(weather[0].icon);
  console.log(main.temp);
  console.log(main.feels_like);
  console.log(main.temp_min);
  console.log(main.temp_max);
  console.log(new Date(sys.sunrise * 1000));
  console.log(new Date(sys.sunset * 1000));

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
              <p class="sunrise-time">Схід сонця: ${sys.sunrise}</p>
          </li>
          <li class="weather-info-item">
              <p class="sunset-time">Захід сонця: ${sys.sunset}</p>
          </li>
          <li class="weather-info-item">
              <p class="clouds">Хмарність: ${clouds.all}%</p>
          </li>
          <li><img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="${weather[0].description}" /></li>
      </ul>
  </div>`;
}
