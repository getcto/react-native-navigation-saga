/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import {white} from 'utils/Colors';

const images = {
  profile_icon: require('assets/images/header/profile_picture.png'),
};

class ProfileHeader extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={images.profile_icon}
            style={{width: 50, height: 50, resizeMode: 'contain'}}
          />
          <Text style={{color: white}}>John 123</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
});

export default ProfileHeader;
