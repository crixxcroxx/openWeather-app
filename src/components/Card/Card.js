import './card.css';

export default function Card(props) {
  const { data } = props

  function dateToString(time) {
    let setTime = new Date(0);
    setTime.setSeconds(time);
    let timeString = setTime.toISOString().substr(11, 8);
    return timeString
  }

  return(
    <div className="card">
      <h3 className="card-title">{data && data.timezone}</h3>
      <hr />
      <div className="card-body">
        <p>Sunrise: <span>{data && dateToString(data.current.sunrise)}</span></p>
        <p>Sunset: <span>{data && dateToString(data.current.sunset)}</span></p>
        <p>Temperature: <span>{data && data.current.temp}</span></p>
        <p>Feels Like: <span>{data && data.current.feels_like}</span></p>
        <p>Humidity: <span>{data && data.current.humidity}</span></p>
        <p>Pressure: <span>{data && data.current.pressure}</span></p>
        <p>Wind Speed: <span>{data && data.current.wind_speed}</span></p>
      </div>
    </div>
  );
}
