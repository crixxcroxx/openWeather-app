const getDetailedForecast = data => ({
  humidity: data.current.humidity,
  pressure: data.current.pressure,
  dew_point: data.current.dew_point,
  uvi: data.current.uvi,
  wind_speed: data.current.wind_speed,
  wind_deg: data.current.wind_deg,
  sunrise: data.current.sunrise,
  sunset: data.current.sunset
})

export default getDetailedForecast
