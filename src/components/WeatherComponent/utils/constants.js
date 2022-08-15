const OPEN_WEATHER_API_BASE_URL = 'https://api.openweathermap.org';
const OPEN_WEATHER_API_KEY = process.env.REACT_APP_WEATHER_KEY;

const QUERYS = {
  current: '/data/2.5/weather',
  forecast: '/data/2.5/forecast',
  geoDataDirect: '/geo/1.0/direct',
  geoDataReverse: '/geo/1.0/reverse',
  zip: '/geo/1.0/zip',
};

const UNITS = {
  standard: 'standard',
  metric: 'metric',
  imperial: 'imperial',
};

const LANGUAGES = {
  es: 'es',
  en: 'en',
};

const PLACES_DEFAULT_LIST = [
  'Mar del plata',
  'Sydney',
  'Bangkok',
  'Berlín',
  'Arequipa',
];

export {
  OPEN_WEATHER_API_BASE_URL,
  OPEN_WEATHER_API_KEY,
  QUERYS,
  UNITS,
  LANGUAGES,
  PLACES_DEFAULT_LIST,
};
