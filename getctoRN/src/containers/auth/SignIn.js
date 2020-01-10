/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import PhoneInput from 'react-native-phone-input';
import Header from 'components/Header';
import FormInput from 'components/FormInput';
import LongButton from 'components/LongButton';

import Icon from 'react-native-vector-icons/AntDesign';
import {white, darkColor} from 'utils/Colors';

class SignIn extends Component {
  onPressFlag() {
    this.countryPicker.openModal();
  }

  selectCountry(country) {
    this.phone.selectCountry(country.cca2.toLowerCase());
    this.setState({cca2: country.cca2});
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <TouchableOpacity
            style={{paddingHorizontal: 20, marginVertical: 15}}
            onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrowleft" color="white" size={30} />
          </TouchableOpacity>
          <Header titleText="Sign in">
            <Text style={{color: white}}>Get back into your account</Text>
          </Header>

          <View>
            <View style={{paddingHorizontal: 50, marginVertical: 20}}>
              <Text style={styles.formLable}>Phone Number</Text>
              <PhoneInput
                ref="phone"
                initialCountry="cn"
                textStyle={{color: 'white'}}
                style={{
                  borderBottomColor: 'white',
                  borderBottomWidth: 1,
                  paddingBottom: 10,
                }}
              />
            </View>
            {/* <FormInput
              formTitle="Login ID"
              onChangeText={text => console.log(text)}
            /> */}
            <FormInput
              formTitle="Password"
              secureTextEntry
              onChangeText={text => console.log(text)}
            />

            <View style={{alignItems: 'center', marginTop: 60}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Dashboard')}>
                <LongButton buttonTitle="Sign in" />
              </TouchableOpacity>
              <Text style={{color: '#838383', marginTop: 10}}>
                Forgot Password ?
              </Text>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SignUp')}
                style={{marginTop: 20}}>
                <Text style={{color: '#838383'}}>Do not have account ?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkColor,
  },
  formLable: {
    color: '#838383',
    marginBottom: 20,
    fontSize: 18,
  },
  phoneInput: {
    color: 'white',
  },
});
export default SignIn;
