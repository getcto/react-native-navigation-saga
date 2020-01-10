/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from 'react-native';
import PhoneInput from 'react-native-phone-input';
import Header from 'components/Header';
import FormInput from 'components/FormInput';
import OTPInput from 'components/OTPInput';
import LongButton from 'components/LongButton';

import Icon from 'react-native-vector-icons/AntDesign';
import {white, darkColor} from 'utils/Colors';

class SignUp extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <SafeAreaView>
          <TouchableOpacity
            style={{paddingHorizontal: 20, marginVertical: 15}}
            onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrowleft" color="white" size={30} />
          </TouchableOpacity>
          <Header titleText="Sign Up">
            <Text style={{color: white}}>Setup your account</Text>
          </Header>

          <View>
            <FormInput
              formTitle="Username"
              onChangeText={text => console.log(text)}
            />
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
            <FormInput
              formTitle="Email"
              secureTextEntry
              onChangeText={text => console.log(text)}
            />
            <FormInput
              formTitle="Password"
              secureTextEntry
              onChangeText={text => console.log(text)}
            />
            <FormInput
              formTitle="Re-Enter Password"
              secureTextEntry
              onChangeText={text => console.log(text)}
            />

            <View style={{alignItems: 'center', marginTop: 30}}>
              <TouchableOpacity>
                <LongButton buttonTitle="Sign Up" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SignIn')}>
                <Text style={{color: '#838383', marginTop: 10}}>
                  Already have account. Sign in
                </Text>
              </TouchableOpacity>
            </View>
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
  formLable: {
    color: '#838383',
    marginBottom: 20,
    fontSize: 18,
  },
});
export default SignUp;
