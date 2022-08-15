import React from 'react';
import PropTypes from 'prop-types';
import styles from './weatherCard.module.scss';
import { getDayName } from '../../../utils/helpers';

const WeatherCard = ({ title, weather }) => {
  const {
    id, dt, description, temp, min, max,
  } = weather;

  const dayName = getDayName((dt || 0) * 1000);

  return (
    <article className={styles['weather-card']}>
      {title && <h2>{title}</h2>}
      {
        id && (
          <div className={styles['weather-container']}>
            <h3>{dayName}</h3>
            <h2>{`${temp} °C`}</h2>
            <h5>{description}</h5>
            {(min && max) && <h5>{`Mímima: ${min}`} <br /> {`Máxima: ${max}`}</h5>}
          </div>
        )
      }
    </article>
  );
};

WeatherCard.propTypes = {
  title: PropTypes.string,
  weather: PropTypes.shape({
    id: PropTypes.number,
    dt: PropTypes.number,
    description: PropTypes.string,
    temp: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
  }),
};

WeatherCard.defaultProps = {
  title: '',
  weather: {},
};

export default WeatherCard;
