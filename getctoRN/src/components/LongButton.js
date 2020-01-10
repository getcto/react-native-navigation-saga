import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {primary, black} from 'utils/Colors';

class LongButton extends Component {
  render() {
    return (
      <View style={styles.longButton}>
        <Text style={styles.longButtonText}>{this.props.buttonTitle}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  longButton: {
    backgroundColor: primary,
    height: 60,
    width: 300,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  longButtonText: {
    color: black,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default LongButton;
