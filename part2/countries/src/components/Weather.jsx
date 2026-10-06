import { useState, useEffect } from 'react'
import weatherService from '../services/weather'

const Weather = ({ capital, latlng }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    weatherService
      .getWeather(latlng[0], latlng[1])
      .then(data => {
        setWeather(data)
      })
      .catch(() => {
        setWeather(null)
      })
  }, [latlng])

  if (weather === null) {
    return null
  }

  return (
    <div>
      <h2>Weather in {capital}</h2>
      <div>temperature {weather.main.temp} Celsius</div>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
      <div>wind {weather.wind.speed} m/s</div>
    </div>
  )
}

export default Weather
