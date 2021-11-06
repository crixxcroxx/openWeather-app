import './side.css';
import Weekly from '../Weekly/Weekly';

export default function Side(props) {
  const { currentDetailed, upcoming } = props

  const fullKeyName = {
    humidity: "Humidity",
    pressure: "Pressure",
    dew_point: "Dew Point",
    uvi: "UV Index",
    wind_speed: "Wind Speed",
    sunrise: "Sunrise",
    sunset: "Sunset"
  }

  function getFullKeyName(key) {
    return fullKeyName[key]
  }

  return(
    <div className="side">
      <div className="detailed-info">
        {//
          props && Object.entries(currentDetailed).map(([key, value]) =>
            <div className="item" key={key}>
              <p className="label">{getFullKeyName(key)}</p>
              <p className="value">{value}</p>
            </div>
          )
        }
      </div>
      <Weekly upcoming={upcoming} />
    </div>
  );
}
