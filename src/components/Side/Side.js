import './side.css';
import Weekly from '../Weekly/Weekly';

export default function Side(props) {
  const { addInfo, weekly } = props

  return(
    <div className="side">
      <div className="detailed-info">
        {
          Object.entries(addInfo).map(([key, value]) =>
            //if(key != "weekly") {
              <div className="item" key={key}>
                <p className="label">{key}</p>
                <p className="value">{value}</p>
              </div>
            //}
          )
        }
        <Weekly data={weekly} />
      </div>
    </div>
  );
}
