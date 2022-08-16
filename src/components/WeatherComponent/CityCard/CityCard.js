import React from 'react';
import PropTypes from 'prop-types';
import styles from './cityCard.module.scss';

const CityCard = ({ city }) => {
  const {
    name, state, country, lat, lon,
  } = city;

  if (!name) {
    return (
      <span className={styles['null-city']}>
        No city found or selected
      </span>
    );
  }

  return (
    <article className={styles['city-card']}>
      <h2>{name}</h2>
      <div className={styles['city-container']}>
        {state && <h3>{`${state}, ${country}`}</h3>}
        {(lat && lon) && <h3>{`Latitud: ${lat}`} <br /> {`Longitud: ${lon}`}</h3>}
      </div>
    </article>
  );
};

CityCard.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string,
    state: PropTypes.string,
    country: PropTypes.string,
    lat: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    lon: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};

CityCard.defaultProps = {
  city: {},
};

export default CityCard;
