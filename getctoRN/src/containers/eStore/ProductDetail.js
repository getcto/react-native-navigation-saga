/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';

import Carousel from 'react-native-banner-carousel';

import Icon from 'react-native-vector-icons/AntDesign';
import {primary, white, darkColor, black} from 'utils/Colors';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 200;

const images = {
  banner: require('assets/images/dashboard/banner.png'),
};

const bannerimages = [images.banner, images.banner, images.banner];

class ProductDetail extends Component {
  renderPage(image, index) {
    return (
      <View>
        <Image
          style={{width: BannerWidth, height: BannerHeight, borderRadius: 5}}
          source={image}
        />
      </View>
    );
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <SafeAreaView>
          <TouchableOpacity
            style={{paddingHorizontal: 20, marginVertical: 5}}
            onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrowleft" color="white" size={30} />
          </TouchableOpacity>
          <View>
            <Carousel
              autoplay
              autoplayTimeout={5000}
              loop
              index={0}
              pageSize={BannerWidth}>
              {bannerimages.map((image, index) =>
                this.renderPage(image, index),
              )}
            </Carousel>
          </View>

          <View style={styles.productDetailsContainer}>
            <Text style={styles.productTitle}>250Hz Supuernova Classic</Text>

            <View style={styles.productInfoHolder}>
              <View>
                <Text style={styles.infoLabel}>Color</Text>
                <Text style={styles.infoText}>Silver</Text>
              </View>

              <View>
                <Text style={styles.infoLabel}>Size</Text>
                <Text style={styles.infoText}>7 x 7 x 6 cm</Text>
              </View>

              <View />
            </View>

            <View>
              <Text style={styles.infoLabel}>Information</Text>
              <Text style={styles.infoText}>
                The Powerball Supernova is the latest development among the
                glowing Powerball simulators. It combines bright blue and white
                LEDs that produce a beautiful icy blue glow. The Powerball
                Supernova Classic is used to develop strength, speed and improve
                dexteri
              </Text>
            </View>

            <View
              style={{
                height: 1,
                backgroundColor: 'white',
                marginVertical: 20,
              }}
            />

            <View style={styles.priceHolder}>
              <View style={{marginRight: 20}}>
                <Text style={styles.infoLabel}>Price</Text>
                <Text style={[styles.infoText, {fontSize: 16}]}>199.50</Text>
              </View>

              <View>
                <Text style={[styles.infoLabel, {textAlign: 'center'}]}>
                  Quantity
                </Text>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TouchableOpacity style={styles.quatityButton}>
                    <Text>-</Text>
                  </TouchableOpacity>

                  <View>
                    <Text style={{color: white}}>0</Text>
                  </View>

                  <TouchableOpacity style={styles.quatityButton}>
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View>
                <Text style={styles.infoLabel}>Total Price</Text>
                <Text
                  style={[styles.infoText, {fontSize: 20, fontWeight: 'bold'}]}>
                  199.50
                </Text>
              </View>
            </View>

            <View style={{marginTop: 15}}>
              <Text style={styles.infoLabel}>Address</Text>
              <TextInput
                placeholder="shipping address"
                style={{backgroundColor: 'lightgray', padding: 5}}
                multiline
              />
            </View>
          </View>

          <View style={styles.buttonHolder}>
            <TouchableOpacity style={styles.longButton}>
              <Text style={styles.buttonText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: black,
  },
  productDetailsContainer: {
    flex: 1,
    backgroundColor: darkColor,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  productTitle: {
    color: white,
    fontWeight: 'bold',
    fontSize: 22,
  },
  productInfoHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 25,
  },
  infoLabel: {
    color: 'gray',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoText: {
    color: white,
  },
  priceHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quatityButton: {
    borderRadius: 5,
    width: 30,
    height: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  buttonHolder: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  longButton: {
    backgroundColor: primary,
    width: '90%',
    paddingVertical: 20,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: black,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ProductDetail;
