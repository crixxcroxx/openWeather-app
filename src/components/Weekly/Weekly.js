import './weekly.css';
import date from '../../helpers/getDate';

export default function Weekly(props) {
  const data = props.upcoming

  return(
    <div className="weekly-forecast">
      {
        props && data.map(item =>
          <div className="widget" key={item.dt}>
            <img className="widget-icon" src={item.weather_icon} />
            <p>{date.getShortDay(item.dt)}</p>
            <p>{Math.round(item.temp)}&#8451;</p>
          </div>
        )
      }
    </div>
  );
}

