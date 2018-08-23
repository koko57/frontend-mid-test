import React, { Component } from 'react';
import './styles/main.scss';
import { Routes } from './routes';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <HashRouter>
                <Routes />
            </HashRouter>
        </Provider>
    );
  }
}

export default App;
