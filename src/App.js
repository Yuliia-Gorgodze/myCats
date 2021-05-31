import React, { Component, Suspense } from 'react';

import propTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './styles.module.css';
import HomePage from './views/HomePage'

class App extends Component {

  render() {
    return (
      <Suspense fallback={<p>Загружаем.... </p>}>
        <Switch>
      <HomePage/>
      </Switch>
      </Suspense>
    );
  }
}


export default App;

