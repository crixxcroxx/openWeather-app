import './card.css';

export default function Card(props) {
  const { data } = props

  function dateToString(time) {
    let setTime = new Date(0);
    setTime.setSeconds(time);
    let timeString = setTime.toISOString().substr(11, 8);
    return timeString
  }

  function getIcon(icon_code) {
    return `http://openweathermap.org/img/wn/${icon_code}@2x.png`
  }

  return(
    <div className="card">
      <div className="card-header">
        <h1>{/*Sunday*/}</h1>
        <p>{data && data.dt}</p>
        <p><span></span>{data && data.city}</p>
      </div>
      <div className="card-body">
        <img className="card-icon" src={getIcon(data && data.icon)}/>
        <h1>{data && data.temp}&#8451;</h1>
        <p>Feels like <span>{data && data.feels_like}&#8451;</span></p>
        <p>{data && data.short_des}</p>
      </div>
    </div>
  );
}
