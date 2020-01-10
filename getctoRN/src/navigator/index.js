'use strict';

import React, {Component} from 'react';

import AppContainer from 'navigator/root/AppNavigator';

class Navigation extends Component {
  render() {
    return <AppContainer screenProps={{language: this.props.language}} />;
  }
}

export default Navigation;
