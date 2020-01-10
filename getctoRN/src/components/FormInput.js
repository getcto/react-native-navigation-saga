import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {white} from '../utils/Colors';

class FormInput extends Component {
  render() {
    return (
      <View style={styles.formContainer}>
        <Text style={styles.formLable}>{this.props.formTitle} </Text>
        <TextInput
          style={styles.formInput}
          secureTextEntry={this.props.secureTextEntry}
          placeholder={this.props.placeholder}
          placeholderTextColor="#838383"
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    marginVertical: 10,
    paddingHorizontal: 50,
  },
  formLable: {
    color: '#838383',
    marginBottom: 10,
    fontSize: 18,
  },
  formInput: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: null,
    color: white,
    fontSize: 18,
    padding: 5,
  },
});

export default FormInput;
