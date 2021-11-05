import './card.css';
import date from '../../helpers/getDate';

export default function Card(props) {
  const data = props.currentShort

  return(
    <div className="card">
      <div className="card-header">
        <h2>{data && date.getDay(data.dt)}</h2>
        <p>{data && date.getDate(data.dt)}, {data && date.getMonth(data.dt)}</p>
        <p><span></span>{data && data.city}, {data && data.country}</p>
      </div>
      <div className="card-body">
        <img className="card-icon" src={data && data.weather_icon}/>
        <h1>{data && data.temp}&#8451;</h1>
        <p>Feels like <span>{data && data.feels_like}&#8451;</span></p>
        <p>{data && data.weather_desc}</p>
      </div>
    </div>
  );
}
