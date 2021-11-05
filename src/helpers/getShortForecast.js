const getShortForecast = data => ({
  dt: data.current.dt,
  city: data.current.city,
  country: data.current.country,
  feels_like: data.current.feels_like,
  temp: data.current.temp,
  weather_desc: data.current.weather[0].main,
  weather_icon: `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`
})

export default getShortForecast
