let input = document.getElementById("input");
let grid = document.getElementById("grid");

let city = document.getElementById("city");
let country = document.getElementById("country");
let region = document.getElementById("region");

let weatherCurrent = document.getElementById("weather");
let weatherImg = document.getElementById("weather-img");
let visibility = document.getElementById("visibility");
let humidity = document.getElementById("humidity");
let uv = document.getElementById("uv");
let wind = document.getElementById("wind");

let temp = document.getElementById("temp");
let time = document.getElementById("time");

grid.style.display = "none";
function weather() {
  grid.style.display = "grid";

    fetch(
        `https://api.weatherapi.com/v1/current.json?key=93c4f7d5944f45d798773646210907&q=${input.value}&aqi=no`
    )
        
    .then((response) => response.json())
      .then((data) => { (city.textContent = data.location.name),
        (country.textContent = `${data.location.country} ,`),
        (weatherCurrent.textContent = `${data.current.condition.text}`),
        (weatherImg.src = `${data.current.condition.icon}`),
        (temp.textContent = `${data.current.temp_c}°C`),
        (time.textContent = `last update : ${data.location.localtime}`),
        (visibility.textContent = `Visibility : ${data.current.vis_km}km`),
        (humidity.textContent = `Humidity : ${data.current.humidity}%`),
        (uv.textContent = `UV index : ${data.current.uv}`),
        (wind.textContent = `Wind speed : ${data.current.wind_kph}kph`);
        (region.textContent = `${data.location.region}`)
      });
        
}

input.addEventListener("keypress", function (ev) {
  if (ev.keyCode === 13 || ev.which === 13) {
    weather();
  }
});
