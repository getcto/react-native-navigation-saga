/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';
import ProfileHeader from 'components/ProfileHeader';

import {black, primary, darkColor, white} from 'utils/Colors';

const images = {
  logo: require('assets/images/logo.png'),
  receive_icon: require('assets/images/dashboard/receive_icon.png'),
  send_icon: require('assets/images/dashboard/send_icon.png'),
  history_icon: require('assets/images/dashboard/history_icon.png'),
  order_icon: require('assets/images/dashboard/order_icon.png'),
  shop_icon: require('assets/images/dashboard/myShop_icon.png'),
  merchant_icon: require('assets/images/dashboard/merchant_icon.png'),
};

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'First Item',
    price: 29.0,
    origin: 'Malaysia',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Second Item',
    price: 400.4,
    origin: 'Malaysia',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Third Item',
    price: 2999.0,
    origin: 'Malaysia',
  },
];

class ProductHolder extends Component {
  render() {
    return (
      <View style={styles.productHolder}>
        <View style={styles.productImage} />
        <View
          style={{
            backgroundColor: darkColor,
            paddingHorizontal: 10,
            paddingVertical: 15,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.productPrice}>{this.props.price} YOYO</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.productBuyButton}
              onPress={this.props.onPress}>
              <Text style={styles.productBuyButtonText}>Buy</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.productName}>{this.props.name}</Text>
          <Text style={styles.productOrigin}>
            Available: {this.props.origin}
          </Text>
        </View>
      </View>
    );
  }
}

class Estore extends Component {
  render() {
    return (
      // <View >
      <SafeAreaView style={styles.container}>
        <ProfileHeader />
        {/* balance container */}
        <View style={styles.storeContainer}>
          <Text style={{color: primary}}>Featured Item</Text>
          <FlatList
            style={{flex: 1}}
            data={DATA}
            numColumns={2}
            renderItem={({item}) => (
              <ProductHolder
                price={item.price}
                name={item.name}
                origin={item.origin}
                onPress={() => this.props.navigation.navigate('ProductDetail')}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </SafeAreaView>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkColor,
  },
  storeContainer: {
    flex: 1,
    backgroundColor: black,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 30,
    marginTop: 20,
    shadowColor: '#6E5E5E',
    shadowRadius: 10,
    shadowOpacity: 0.4,
    shadowOffset: {width: 2, height: -5},
    justifyContent: 'center',
    alignItems: 'center',
  },
  productHolder: {
    borderRadius: 5,
    padding: 5,
    width: '50%',
  },
  productImage: {
    height: 100,
    backgroundColor: white,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  productPrice: {
    color: white,
    marginBottom: 10,
  },
  productBuyButton: {
    backgroundColor: primary,
    width: 120,
    flex: 1,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 25,
    marginVertical: 5,
  },
  productBuyButtonText: {
    color: white,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  productName: {
    color: white,
    marginVertical: 5,
  },
  productOrigin: {
    color: white,
    opacity: 0.4,
  },
});

export default Estore;
