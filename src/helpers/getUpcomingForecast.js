function getDataPerDay(data) {
  let weekly = []
  let dataCopy = data.upcoming_days

  // only show the next 5 days
  dataCopy.shift()
  dataCopy.splice(5)

  dataCopy.map((item, idx) =>
    weekly.push({
      dt: item.dt,
      temp: item.temp.day,
      weather_icon: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
    })
  )

  return weekly
}

const getUpcomingForecast = data => getDataPerDay(data)

export default getUpcomingForecast

