import PropTypes from 'prop-types';
import styles from './header.module.scss';

const Header = ({ title }) => (
  <header className={styles.header}>
    {title}
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'No Title',
};

export default Header;
