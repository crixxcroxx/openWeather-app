import { useEffect, useState } from 'react';
import getShortForecast from '../helpers/getShortForecast';
import getDetailedForecast from '../helpers/getDetailedForecast';
import getUpcomingForecast from '../helpers/getUpcomingForecast';

export default function useFetchForecast() {
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [fcast, setFcast] = useState(false)
  const [data, setData] = useState({})
  const key = "31040fa663c3e413a9eb4265bafd97de"
  const base_url = "https://api.openweathermap.org/data/2.5"

  async function searchLocation(location) {
    await getData(location)
  }

  async function fetchData(url) {
    let response = await fetch(url)
    if(!response.ok) {
      setError(true)
    }  else {
      setError(false)
      let val = await response.json()

      return val
    }
  }

  async function getData(location) {
    setIsLoading(true)

    const weather_url = `${base_url}/weather?q=${location}&appid=${key}`
    let c = await fetchData(weather_url)

    if(!error) {
      const onecall_url = `${base_url}/onecall?lat=${c.coord.lat}&lon=${c.coord.lon}&exclude=hourly,minutely&units=metric&appid=${key}`
      let forecast = await fetchData(`${onecall_url}`)

      if(!error) {
        forecast.current.city = c.name
        forecast.current.country = c.sys.country

        const current = forecast.current
        const upcoming_days = forecast.daily

        filterData({current, upcoming_days})
      }
    }
  }

  function filterData(d) {
    const shortForecast = getShortForecast(d)
    const detailedForecast = getDetailedForecast(d)
    const upcomingForecast = getUpcomingForecast(d)

    setData({shortForecast, detailedForecast, upcomingForecast})
    setIsLoading(false)
    setFcast(true)
  }

  return { data, isLoading, error, fcast, searchLocation }
}
