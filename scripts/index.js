'use strict'

const weatherIs = document.getElementById('weatherIs');
// const changeCity = document.getElementById('changeCity');
const submitFormButton = document.getElementById("submitForm");
const defaultCity = "Atlanta"

const getWeather = (city) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=728cd06e7a37efcfe88515c1a806d287`;

  get(url).then(function (fetchResponse) {
      weatherIs.innerHTML = fetchResponse.main.temp; // add math here to convert
      // console.log(fetchResponse);
  });
}

// changeCity.addEventListener('click', function (event) {
//   event.preventDefault();
//   getWeather(defaultCity);
// });

submitFormButton.addEventListener('click', function (e) {
  e.preventDefault();
  const userInput = document.getElementById("cityInput");
  const city = userInput.value;
  getWeather(city);
});

(function () {
  getWeather(defaultCity)
})();