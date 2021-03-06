import './side.css';
import Weekly from '../Weekly/Weekly';

export default function Side(props) {
  const { currentDetailed, upcoming } = props

  return(
    <div className="side">
      <div className="detailed-info">
        {props && Object.entries(currentDetailed).map(([key, value]) =>
          <div className="item" key={key}>
            <p className="label">{key}</p>
            <p className="value">{value}</p>
          </div>
        )}
      </div>
      <Weekly upcoming={upcoming} />
    </div>
  );
}
