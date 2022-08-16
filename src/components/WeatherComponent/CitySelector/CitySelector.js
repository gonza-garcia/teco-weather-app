import { useState, useId } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import useDebounce from '../../../customHooks/useDebounce';
import styles from './citySelector.module.scss';
import { getRandomId } from '../../../utils/helpers';

const CitySelector = ({ handleInputChange, placesList }) => {
  const [inputValue, setInputValue] = useState('');

  const inputId = useId();

  useDebounce(() => handleInputChange(inputValue), 1000, [inputValue]);

  return (
    <section className={styles['city-selector']}>
      <label
        className={styles.disclaimer}
        htmlFor={inputId}
      >
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

      <span className={styles.disclaimer}>
        O elegí de la lista:
      </span>

      <div className={styles.lista}>
        {placesList.map((place) => (
          <Button
            text={place}
            handleClick={() => setInputValue(place)}
            variant="pill"
            key={getRandomId()}
          />
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
