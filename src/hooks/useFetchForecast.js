import { useEffect, useState } from 'react';
import getShortForecast from '../helpers/getShortForecast';
import getDetailedForecast from '../helpers/getDetailedForecast';
import getUpcomingForecast from '../helpers/getUpcomingForecast';

export default function useFetchForecast(location) {
  const [isLoading, setIsLoading] = useState(true)
  const [fcast, setFcast] = useState(false)

  const key = "31040fa663c3e413a9eb4265bafd97de"
  const base_url = "https://api.openweathermap.org/data/2.5/"
  const current_f_url = `${base_url}weather?q=${location}&appid=${key}`

  const [data, setData] = useState({})
  useEffect(() => getData(), [])

  async function fetchData(url) {
    let response = await fetch(url)
    if(!response.ok) throw new Error("Failed to fetch data.")
    let val = await response.json()

    return val
  }

  async function getData() {
    let c = await fetchData(`${current_f_url}`)
    const daily_f_url =`${base_url}onecall?lat=${c.coord.lat}&lon=${c.coord.lon}&exclude=hourly,minutely&units=metric&appid=${key}`
    let forecast = await fetchData(`${daily_f_url}`)

    forecast.current.city = c.name
    forecast.current.country = c.sys.country

    const current = forecast.current
    const upcoming_days = forecast.daily

    filterData({current, upcoming_days})
  }

  function filterData(d) {
    const shortForecast = getShortForecast(d)
    const detailedForecast = getDetailedForecast(d)
    const upcomingForecast = getUpcomingForecast(d)

    setData({shortForecast, detailedForecast, upcomingForecast})
    setIsLoading(false)
    setFcast(true)
  }

  return { data, isLoading, fcast }
}
