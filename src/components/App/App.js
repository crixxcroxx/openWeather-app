import './app.css';
import Card from '../Card/Card';
import Side from '../Side/Side';
import useFetchForecast from '../../hooks/useFetchForecast';

export default function App() {
  const { data, isLoading, fcast: forecast } = useFetchForecast("manila")

  console.log(data, isLoading)

  return (
    forecast && <>{
      isLoading ? <i>Loading</i> :
      <div className="app">
        <Card currentShort={data.shortForecast} />
        <Side
          currentDetailed={data.detailedForecast}
          upcoming={data.upcomingForecast}
        />
      </div>
    }</>
  );
}
