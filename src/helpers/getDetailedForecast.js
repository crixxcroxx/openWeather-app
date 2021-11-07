const fullKeyName = {
  humidity: "Humidity",
  pressure: "Pressure",
  dew_point: "Dew Point",
  uvi: "UV Index",
  wind_speed: "Wind Speed",
  sunrise: "Sunrise",
  sunset: "Sunset"
}

function addZero(t) {
  if(t < 10)  { return `0${t}` }

  return t
}

function getTime(unixtime) {
  const d = new Date(unixtime * 1000);
  const h = addZero(d.getHours())
  const m = addZero(d.getMinutes())

  return `${h} : ${m}`
}

const getDetailedForecast = data => ({
  [fullKeyName.humidity]: `${data.current.humidity}%`,
  [fullKeyName.pressure]: `${data.current.pressure}hPa`,
  [fullKeyName.dew_point]: `${data.current.dew_point}°C`,
  [fullKeyName.uvi]: data.current.uvi,
  [fullKeyName.wind_speed]: `${data.current.wind_speed}m/s`,
  [fullKeyName.sunrise]: getTime(data.current.sunrise),
  [fullKeyName.sunset]: getTime(data.current.sunset)
})

export default getDetailedForecast
