function addZero(t) {
  if(t < 10)  { return `0${t}` }

  return t
}

function getTime(unixtime) {
  const d = new Date(unixtime * 1000);
  let h = addZero(d.getHours())
  let m = addZero(d.getMinutes())

  return `${h} : ${m}`
}

const getDetailedForecast = data => ({
  humidity: data.current.humidity,
  pressure: data.current.pressure,
  dew_point: data.current.dew_point,
  uvi: data.current.uvi,
  wind_speed: data.current.wind_speed,
  wind_deg: data.current.wind_deg,
  sunrise: getTime(data.current.sunrise),
  sunset: getTime(data.current.sunset)
})

export default getDetailedForecast
