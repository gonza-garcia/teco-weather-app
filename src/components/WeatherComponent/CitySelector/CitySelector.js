import { useState, useId } from 'react';
import PropTypes from 'prop-types';
import useDebounce from '../../../customHooks/useDebounce';
import styles from './citySelector.module.scss';
import { getRandomId } from '../../../utils/helpers';

const CitySelector = ({ handleInputChange, placesList }) => {
  const [inputValue, setInputValue] = useState('');

  const inputId = useId();

  useDebounce(() => handleInputChange(inputValue), 1000, [inputValue]);

  return (
    <section className={styles['city-selector']}>
      <label htmlFor={inputId}>
        Buscá tu lugar en el mundo:
      </label>

      <input
        id={inputId}
        className={styles.input}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Escribí acá"
      />

      O elegí de la lista:

      <div className={styles.lista}>
        {placesList.map((place) => (
          <button
            type="button"
            onClick={() => setInputValue(place)}
            key={getRandomId()}
          >
            {place}
          </button>
        ))}
      </div>
    </section>
  );
};

CitySelector.propTypes = {
  handleInputChange: PropTypes.func,
  placesList: PropTypes.arrayOf(PropTypes.string),
};

CitySelector.defaultProps = {
  handleInputChange: () => {},
  placesList: [],
};

export default CitySelector;
