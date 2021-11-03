import './weekly.css';

export default function Weekly() {

  return(
    <div className="weekly-forecast">
      {/*map this*/}
      <div className="widget">
        <img className="widget-icon" src="http://openweathermap.org/img/wn/10d@2x.png"/>
        <p>Mon</p>
        <p>-1&#8451;</p>
      </div>
    </div>
  );
}

