/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import ProfileHeader from 'components/ProfileHeader';
import Header from 'components/Header';
import LongButton from 'components/LongButton';

import {primary, white, darkColor, black} from 'utils/Colors';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';

const images = {
  logo: require('assets/images/logo.png'),
  receive_icon: require('assets/images/dashboard/receive_icon.png'),
  send_icon: require('assets/images/dashboard/send_icon.png'),
  history_icon: require('assets/images/dashboard/history_icon.png'),
  order_icon: require('assets/images/dashboard/order_icon.png'),
  shop_icon: require('assets/images/dashboard/myShop_icon.png'),
  merchant_icon: require('assets/images/dashboard/merchant_icon.png'),
};

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

class Trade extends Component {
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
          <ProfileHeader />
          <Header titleText="Trade YOYO token here">
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <TouchableOpacity style={styles.tradeButton}>
                <Text style={{color: white}}>Buy</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.tradeButton}>
                <Text style={{color: white}}>Sell</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.tradeButton}>
                <Text style={{color: white}}>Pending</Text>
              </TouchableOpacity>
            </View>
          </Header>

          <View style={{alignItems: 'center'}}>
            {this.renderForm()}
            <LongButton buttonTitle="BUY" />
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

export default Trade;
