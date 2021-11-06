import './app.css';
import SearchBar from '../SearchBar/SearchBar';
import Card from '../Card/Card';
import Side from '../Side/Side';
import useFetchForecast from '../../hooks/useFetchForecast';

export default function App() {
  const { data, isLoading, fcast: forecast, searchLocation } = useFetchForecast()

  function submitSearch(value) {
    searchLocation(value)
  }

  return (
    <>
      {!forecast &&
        <>
          { !isLoading &&<SearchBar handleForm={submitSearch}/> }
          { isLoading && <i>Loading</i> }
        </>
      }
      {forecast && <>
        <SearchBar handleForm={submitSearch}/>
        <div className="app">
          <Card currentShort={data.shortForecast} />
          <Side
            currentDetailed={data.detailedForecast}
            upcoming={data.upcomingForecast}
          />
        </div> </>
      }
    </>
  );
}
