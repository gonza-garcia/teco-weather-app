import React from 'react';
import WeatherPresenter from './components/WeatherComponent/WeatherPresenter/WeatherPresenter';
import Header from './components/Header/Header';
import styles from './App.module.scss';

function App() {
  return (
    <>
      <Header title="Teco App" />
      <main className={styles.main}>
        <WeatherPresenter />
      </main>
      {/* <Footer title="Made by Gonza García" /> */}
    </>
  );
}

export default App;
