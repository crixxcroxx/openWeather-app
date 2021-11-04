import { useEffect, useState } from 'react';
import './weekly.css';

export default function Weekly(props) {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.data.lat}&lon=${props.data.lon}&units=metric&appid=${props.data.key}`

  const [data, setData] = useState([])
  useEffect(() => {
    if(Object.keys(props).length !== 3) fetchData()
  }, [])

  async function fetchData() {
    let res = await fetch(url).catch(err => console.error(err))
    if(!res.ok) throw new Error("Failed to fetch dataaaa")
    let val = await res.json()

    setData(val.daily)
  }

  return(
    <div className="weekly-forecast">
      {
        data.length == 8 && data.map((item, idx) =>
          idx < 5 &&
          <div className="widget" key={idx}>
            <img className="widget-icon" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
            <p>{idx}</p>
            <p>{item.temp.day}&#8451;</p>
          </div>
        )
      }
    </div>
  );
}

