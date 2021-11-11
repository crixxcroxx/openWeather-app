import './app.css';
import SearchBar from '../SearchBar/SearchBar';
import Card from '../Card/Card';
import Side from '../Side/Side';
import useFetchForecast from '../../hooks/useFetchForecast';

export default function App() {
  const { data, isLoading, error, fcast: forecast, searchLocation } = useFetchForecast()

  function submitSearch(value) {
    searchLocation(value)
  }

  return (
    <>
      {!forecast &&
        <>
          { !isLoading &&<SearchBar handleForm={submitSearch}/> }
          { isLoading && <i>Loading</i> }
          { error && <i>Location not found!</i> }
        </>
      }
      {forecast &&
        <>
          <SearchBar handleForm={submitSearch}/>
          { error && <i>Location not found!</i> }
          <div className="app">
            <Card currentShort={data.shortForecast} />
            <Side
              currentDetailed={data.detailedForecast}
              upcoming={data.upcomingForecast}
            />
          </div>
        </>
      }
    </>
  );
}
