import React, {Component} from 'react';

import {Provider} from 'react-redux';
import configureStore from 'store/configureStore';

import AppContainer from 'navigator/root/AppNavigator';

const {persistor, store} = configureStore();

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store} persistor={persistor}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
