class WeatherList {
  constructor (parentSelector) {
    this.parent = document.querySelector(parentSelector)
  }

  addWeather (message) {
    const msg = document.createElement('p')
    msg.textContent = message
    msg.classList.add('weather-message')
    this.parent.appendChild(msg)
  }
}

const main = () => {
  const weatherList = new WeatherList('.weather')
  weatherList.addWeather('sunny')
  weatherList.addWeather('rainy')
  weatherList.addWeather('chance of thunder')

  const forecastList = new WeatherList('.forecast')
  forecastList.addWeather('Tommorow it will be sunny')
  forecastList.addWeather('Friday it will rain')
}

document.addEventListener('DOMContentLoaded', main)
