import React from 'react';
import WeatherPresenter from './components/WeatherComponent/WeatherPresenter/WeatherPresenter';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styles from './App.module.scss';

function App() {
  return (
    <>
      <Header title="Teco Weather App" subtitle="Buscá el clima y el pronóstico de cualquier lugar en el mundo" />

      <main className={styles.main}>
        <WeatherPresenter />
      </main>

      <Footer title="Made by Gonza García" />
    </>
  );
}

export default App;
