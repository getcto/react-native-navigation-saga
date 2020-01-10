import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {primary, black} from 'utils/Colors';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>{this.props.titleText}</Text>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: black,
    borderRadius: 40,
    minHeight: 150,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  titleText: {
    color: primary,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

export default Header;
