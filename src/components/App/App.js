import { useEffect, useState } from 'react';
import './app.css';
import Card from '../Card/Card';
import Side from '../Side/Side';

export default function App() {
  const key = "31040fa663c3e413a9eb4265bafd97de"
  let city_name = "Borongan"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=${key}`

  const [data, setData] = useState({})
  useEffect(() => fetchData(), [])

  async function fetchData() {
    let res = await fetch(url).catch(err => console.error(err))
    if(!res.ok) throw new Error("Failed to fetch data")
    let val = await res.json()

    setData(
      {
        card: {
          city: val.name,
          dt: val.dt,
          temp: val.main.temp,
          feels_like: val.main.feels_like,
          short_des: val.weather[0].main,
          icon: val.weather[0].icon
        },
        side: {
          humidity: val.main.humidity,
          pressure: val.main.pressure,
          temp_max: val.main.temp_max,
          temp_min: val.main.temp_min,
          wind_dir: val.wind.deg,
          wind_speed: val.wind.speed,
          sunrise: val.sys.sunrise,
          sunset: val.sys.sunset
        },
        weekly: {
          lon: val.coord.lon,
          lat: val.coord.lat,
          key: key
        }
      }
    )
  }

  return (
    <div className="app">
      <Card data={Object.keys(data).length == 3 && data.card} />
      <Side
        addInfo={Object.keys(data).length == 3 && data.side}
        weekly={Object.keys(data).length == 3 && data.weekly}
      />
    </div>
  );
}
