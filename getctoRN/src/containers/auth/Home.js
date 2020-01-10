/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView
} from 'react-native';
import LongButton from 'components/LongButton';

import {primary, black, white} from 'utils/Colors';

const images = {
  bgImg: require('assets/images/home/background-img.png'),
  title: require('assets/images/home/title.png'),
  logo: require('assets/images/logo.png'),
};

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
       
        <View style={{alignItems: 'center'}}>
          <Image
            source={images.logo}
            style={{
              height: 150,
              resizeMode: 'contain',
              marginVertical: 50,
            }}
          />
        </View>

        <View style={styles.homeContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignIn')}>
            <LongButton buttonTitle="Sign In" />
          </TouchableOpacity>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{color: white}}>Don't have account?</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text style={{color: primary}}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: black,
    // justifyContent: 'space-between',
  },
  bgImgStyle: {
    width: null,
    height: 300,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 100,
  },
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 80,
  },
});

export default Home;
