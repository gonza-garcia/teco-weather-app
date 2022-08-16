import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const VARIANTS = {
  default: 'default',
  pill: 'pill',
};

const Button = ({ text, handleClick, variant }) => {
  const buttonVariant = VARIANTS[variant] || VARIANTS.default;
  return (
    <button
      className={`${styles.button} ${styles[buttonVariant]}`}
      type="button"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  text: PropTypes.string,
  variant: PropTypes.string,
};

Button.defaultProps = {
  handleClick: () => {},
  text: '',
  variant: 'default',
};

export default Button;
