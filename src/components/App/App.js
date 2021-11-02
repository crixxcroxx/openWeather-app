import { useEffect, useState } from 'react';
import './app.css';
import Card from '../Card/Card';

export default function App() {
//   https://openweathermap.org/api/one-call-api
//   https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}

  let key = "2edc22293903670a3123bda370a486b4"
  let lang = "en"
  let units = "standard"
  let url = "https://api.openweathermap.org/data/2.5/onecall?"

  const [data, setData] = useState({})
  useEffect(() => fetchData(), [])

  async function fetchData() {
    let a = `lat=33.44&lon=-94.04&exclude=hourly,minutely&appid=${key}`
    let res = await fetch(url += a)
    if(!res.ok) throw new Error("Failed to fetch data")
    let val = await res.json()

    setData(val)
    console.log(val)
  }

  return (
    <div className="app">
      <Card data={data} />
    </div>
  );
}
