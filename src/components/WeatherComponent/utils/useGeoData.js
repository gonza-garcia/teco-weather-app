import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { OPEN_WEATHER_API_BASE_URL, OPEN_WEATHER_API_KEY, QUERYS } from './constants';

const api = axios.create({
  baseURL: OPEN_WEATHER_API_BASE_URL,
});

const NULL_GEO_DATA = {
  name: '',
  lat: null,
  lon: null,
  country: '',
  state: '',
};

const useGeoData = (city) => {
  const [cityData, setCityData] = useState(NULL_GEO_DATA);

  const getGeoData = useCallback(async () => {
    try {
      if (!city) throw new Error('Ciudad no encontrada');

      const { data: [geoData] } = await api.get(QUERYS.geoDataDirect, {
        params: {
          appid: OPEN_WEATHER_API_KEY,
          q: city || '',
        },
      });

      if (!geoData) throw new Error('Ciudad no encontrada');

      const newCityDataInSpanish = {
        name: geoData?.local_names?.es || geoData.name,
        lat: geoData.lat,
        lon: geoData.lon,
        country: geoData.country,
        state: geoData.state,
      };

      setCityData(newCityDataInSpanish);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('Error:', error);
      setCityData(NULL_GEO_DATA);
    }
  }, [city]);

  useEffect(() => { getGeoData(); }, [getGeoData]);

  return cityData;
};

export default useGeoData;
