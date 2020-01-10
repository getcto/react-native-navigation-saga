/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import ProfileHeader from 'components/ProfileHeader';
import Header from 'components/Header';
import LongButton from 'components/LongButton';

import {primary, white, darkColor, black} from 'utils/Colors';

import Icon from 'react-native-vector-icons/AntDesign';

class TradeForm extends Component {
  render() {
    return (
      <View style={styles.formHolder}>
        <View
          style={{
            width: 80,
            borderRightColor: black,
            borderRightWidth: 1,
            marginRight: 10,
          }}>
          <Text>{this.props.formLable}</Text>
        </View>
        <TextInput style={{flex: 1}} />
      </View>
    );
  }
}

class Send extends Component {
  renderForm() {
    return (
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center',
          paddingHorizontal: 30,
          marginTop: 30,
          marginBottom: 50,
        }}>
        <TradeForm formLable="Currency" />
        <TradeForm formLable="Quantity" />
        <TradeForm formLable="Price" />
        <TradeForm formLable="Total" />
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <SafeAreaView>
          <TouchableOpacity
            style={{paddingHorizontal: 20, marginVertical: 15}}
            onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrowleft" color="white" size={30} />
          </TouchableOpacity>
          <Header titleText="Send YOYO Tokens" />

          <View style={{alignItems: 'center'}}>
            {this.renderForm()}
            <LongButton buttonTitle="Send Token" />
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkColor,
  },
  tradeButton: {
    marginHorizontal: 15,
    backgroundColor: primary,
    padding: 10,
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formHolder: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: white,
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default Send;
