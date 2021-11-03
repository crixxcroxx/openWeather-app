import './side.css';
import Weekly from '../Weekly/Weekly';

export default function Side(props) {

  return(
    <div className="side">
      <div className="detailed-info">
        {/*map this*/}
        <div className="item">
          <p className="label">Predictability</p>
          <p className="value">84 %</p>
        </div>
      </div>
      <Weekly />
    </div>
  );
}
