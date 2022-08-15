import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {
  OPEN_WEATHER_API_BASE_URL, OPEN_WEATHER_API_KEY, QUERYS, UNITS, LANGUAGES,
} from './constants';

const api = axios.create({
  baseURL: OPEN_WEATHER_API_BASE_URL,
});

const NULL_WEATHER = {
  id: 0,
  dt: 0,
  description: '',
  temp: 0,
  min: 0,
  max: 0,
};

const useWeather = (lat, lon, units, lang) => {
  const value = 42;
  // eslint-disable-next-line no-console
  console.log(`0x${value.toString(16)}`);
  const [currentWeather, setCurrentWeather] = useState(NULL_WEATHER);
  const [forecastWeather, setForecastWeather] = useState([]);

  const getCurrentWeather = useCallback(async () => {
    try {
      if (lat === null || lon === null) throw new Error('Ciudad no proporcionada');

      const { data } = await api.get(QUERYS.current, {
        params: {
          appid: OPEN_WEATHER_API_KEY,
          units: UNITS[units] || 'metric',
          lang: LANGUAGES[lang] || 'es',
          lat,
          lon,
        },
      });

      if (!data?.weather?.[0]?.id) throw new Error('Clima no encontrado');

      const newWeather = {
        id: data.weather?.[0]?.id,
        description: data.weather?.[0]?.description,
        dt: data.dt,
        temp: data.main?.temp,
        min: data.main?.temp_min,
        max: data.main?.temp_max,
      };

      setCurrentWeather(newWeather);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('Error:', error);
      setCurrentWeather(NULL_WEATHER);
    }
  }, [lat, lon, units, lang]);

  const getForecastWeather = useCallback(async () => {
    try {
      if (lat === null || lon === null) throw new Error('Ciudad no proporcionada');

      const { data } = await api.get(QUERYS.forecast, {
        params: {
          appid: OPEN_WEATHER_API_KEY,
          units: UNITS[units] || 'metric',
          lang: LANGUAGES[lang] || 'es',
          lat,
          lon,
        },
      });

      if (!data?.list?.length) throw new Error('Climas no encontrados');

      const newList = (data?.list || [])
        .filter((w) => (w?.dt_txt?.includes('12:00:00')))
        .map((w) => (
          {
            id: w?.weather?.[0]?.id,
            dt: w?.dt,
            description: w?.weather?.[0]?.description,
            temp: w?.main?.temp,
            min: w?.main?.temp_min,
            max: w?.main?.temp_max,
          }
        ));

      setForecastWeather(newList);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('Error:', error);
      setForecastWeather([]);
    }
  }, [lat, lon, units, lang]);

  // const getForecastWeather = useCallback(async () => {
  //   const { data } = await api.get(QUERYS.forecast, {
  //     params: {
  //       appid: OPEN_WEATHER_API_KEY,
  //       // lat: lat || 0,
  //       // lon: lon || 0,
  //       lat: 0,
  //       lon: 0,
  //       units: UNITS[units] || 'metric',
  //       lang: LANGUAGES[lang] || 'es',
  //     },
  //   });

  //   const newList = (data?.list || [])
  //     .filter((w) => (w?.dt_txt?.includes('12:00:00')))
  //     .map((w) => (
  //       {
  //         id: w?.weather?.[0]?.id,
  //         dt: w?.dt,
  //         description: w?.weather?.[0]?.description,
  //         temp: w?.main?.temp,
  //         min: w?.main?.temp_min,
  //         max: w?.main?.temp_max,
  //       }
  //     ));
  //   setForecastWeather(data ? newList : []);
  // }, [lat, lon, units, lang]);

  useEffect(() => { getCurrentWeather(); }, [getCurrentWeather]);
  useEffect(() => { getForecastWeather(); }, [getForecastWeather]);

  return [currentWeather, forecastWeather];
};

export default useWeather;
