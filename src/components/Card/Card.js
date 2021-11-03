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
      <div className="card-header">
        <h1>{/*Sunday*/}</h1>
        <p>{/*December 23*/}</p>
        <p><span>-0-</span>{/* Berlin*/}</p>
      </div>
      <div className="card-body">
        <img className="card-icon" src="http://openweathermap.org/img/wn/10d@2x.png"/>
        <h1>{/*-3&#8451;*/}</h1>
        <p>Feels like <span>{/*-4&#8451;*/}</span></p>
        <p>{/*Hail*/}</p>
      </div>
    </div>
  );
}
