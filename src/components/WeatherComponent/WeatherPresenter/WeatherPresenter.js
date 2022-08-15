import React, { useState, useEffect } from 'react';
import CitySelector from '../CitySelector/CitySelector';
import useGeoData from '../utils/useGeoData';
import useWeather from '../utils/useWeather';
import CityCard from '../CityCard/CityCard';
import WeatherCard from '../WeatherCard/WeatherCard';
import { getRandomId } from '../../../utils/helpers';
import styles from './weatherPresenter.module.scss';
import { PLACES_DEFAULT_LIST } from '../utils/constants';

const WeatherPresenter = () => {
  const [city, setCity] = useState('');
  const cityData = useGeoData(city);
  const [placesList, setPlacesList] = useState(PLACES_DEFAULT_LIST);

  const [currentWeather, forecastWeather] = useWeather(cityData?.lat, cityData?.lon);

  useEffect(() => {
    // If city exists and it isn´t included in placesList, add it to the list
    if (cityData.name && !placesList.map((e) => e.toLowerCase()).includes(cityData.name.toLowerCase())) {
      setPlacesList([...placesList, cityData.name]);
    }
  }, [cityData.name, placesList]);

  const handleInputChange = (inputValue) => {
    setCity(inputValue);
  };

  return (
    <div className={styles['weather-presenter']}>
      <div className={styles['city-info']}>
        <CitySelector
          handleInputChange={handleInputChange}
          placesList={placesList}
        />
        <CityCard
          city={cityData}
        />
      </div>
      {
        !!forecastWeather.length && (
          <div className={styles['weather-info']}>
            <WeatherCard
              title="Hoy"
              weather={currentWeather}
            />
            {forecastWeather.map((w) => (
              <WeatherCard
                weather={w}
                key={getRandomId()}
              />
            ))}
          </div>
        )
      }
    </div>
  );
};

export default WeatherPresenter;
