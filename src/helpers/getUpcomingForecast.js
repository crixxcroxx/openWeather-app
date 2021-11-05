function getDataPerDay(data) {
  let week = []

  data.upcoming_days.map((item, idx) => {
    if(idx != 0 && idx < 6) {
      week.push({
        dt: item.dt,
        temp: item.temp.day,
        weather_icon: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
      })
    }
  })

  return week
}

const getUpcomingForecast = data => getDataPerDay(data)

export default getUpcomingForecast

