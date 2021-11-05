import './app.css';
import Card from '../Card/Card';
import Side from '../Side/Side';
import useFetchForecast from '../../hooks/useFetchForecast';

export default function App() {
  let forecast = useFetchForecast("bulacan")

  return (
    <div className="app">
      <Card currentShort={forecast.shortForecast} />
      <Side
        currentDetailed={forecast.detailedForecast}
        upcoming={forecast.upcomingForecast}
      />
    </div>
  );
}
