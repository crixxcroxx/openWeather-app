import './app.css';
import SearchBar from '../SearchBar/SearchBar';
import Card from '../Card/Card';
import Side from '../Side/Side';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import useFetchForecast from '../../hooks/useFetchForecast';

export default function App() {
  const { data, isLoading, isError, fcast: forecast, getData } = useFetchForecast()

  return (
    <>
      {!forecast
        ? <>
            { !isLoading && <SearchBar handleForm={getData}/> }
            { isLoading && <Loader /> }
            { isError && <Modal />}
          </>

        : <>
            { isError && <Modal /> }

            <div className="app">
              <SearchBar handleForm={getData}/>

              <div className="forecast-wrapper">
                <Card currentShort={data.shortForecast} />
                <Side
                  currentDetailed={data.detailedForecast}
                  upcoming={data.upcomingForecast}
                />
              </div>
            </div>
          </>
      }
    </>
  );
}
