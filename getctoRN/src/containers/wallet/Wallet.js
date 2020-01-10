/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import ProfileHeader from 'components/ProfileHeader';


import {black, white, darkColor} from 'utils/Colors';

const images = {
  logo: require('assets/images/logo.png'),
  receive_icon: require('assets/images/dashboard/receive_icon.png'),
  send_icon: require('assets/images/dashboard/send_icon.png'),
  history_icon: require('assets/images/dashboard/history_icon.png'),
  order_icon: require('assets/images/dashboard/order_icon.png'),
  shop_icon: require('assets/images/dashboard/myShop_icon.png'),
  merchant_icon: require('assets/images/dashboard/merchant_icon.png'),
  banner: require('assets/images/dashboard/banner.png'),
};

const bannerimages = [images.banner, images.banner, images.banner];

class BalanceFeild extends Component {
  render() {
    return (
      <View style={styles.balanceHolder}>
        <Text style={styles.balanceTitle}>{this.props.balanceTitle}</Text>
        <Text style={styles.balanceText}>{this.props.balanceText}</Text>
      </View>
    );
  }
}

class ServiceCard extends Component {
  render() {
    return (
      <View style={styles.cardHolder}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Image source={this.props.cardIcon} style={styles.cardIcon} />
          <Text style={styles.cardText}>{this.props.cardText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Wallet extends Component {
  renderBalance() {
    return (
      <View>
        <BalanceFeild
          balanceTitle="Available Balance"
          balanceText="31,921.88"
        />
        <BalanceFeild balanceTitle="Frozen Balance" balanceText="21.88" />
        <BalanceFeild balanceTitle="Reward Points" balanceText="300.88" />
      </View>
    );
  }

  renderServices() {
    return (
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        
        <ServiceCard cardIcon={images.receive_icon} cardText="Receive" />
        <ServiceCard
          cardIcon={images.send_icon}
          cardText="Send"
          onPress={() => this.props.navigation.navigate('Send')}
        />
        <ServiceCard cardIcon={images.history_icon} cardText="History" />
        <ServiceCard cardIcon={images.order_icon} cardText="Order" />
        <ServiceCard cardIcon={images.shop_icon} cardText="My Shop" />
        <ServiceCard cardIcon={images.merchant_icon} cardText="Merchant" />
      </View>
    );
  }


  render() {
    return (
      <ScrollView style={styles.container}>
        <SafeAreaView>
         
          <ProfileHeader />
          {/* balance container */}
          <View style={styles.balanceContainer}>
            {this.renderBalance()}
            <Image
              source={images.logo}
              style={{width: 100, height: 100, resizeMode: 'contain'}}
            />
          </View>
          {/* service icons */}
          <View>{this.renderServices()}</View>

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
  balanceContainer: {
    backgroundColor: black,
    borderRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#6E5E5E',
    shadowRadius: 10,
    shadowOpacity: 0.4,
    shadowOffset: {width: 2, height: 5},
  },
  balanceHolder: {
    marginVertical: 10,
  },
  balanceTitle: {
    color: white,
    fontWeight: 'bold',
  },
  balanceText: {
    color: white,
  },
  cardHolder: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    marginVertical: 20,
  },
  cardIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 6,
  },
  cardText: {
    color: white,
  },
});

export default Wallet;
