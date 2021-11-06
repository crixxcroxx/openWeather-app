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
  humidity: `${data.current.humidity} %`,
  pressure: `${data.current.pressure} hPa`,
  dew_point: `${data.current.dew_point} °C`,
  uvi: data.current.uvi,
  wind_speed: `${data.current.wind_speed}m/s ${data.current.wind_deg}`,
  sunrise: getTime(data.current.sunrise),
  sunset: getTime(data.current.sunset)
})

export default getDetailedForecast
