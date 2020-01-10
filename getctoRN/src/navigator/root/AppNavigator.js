import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import Home from 'containers/auth/Home';
import SignIn from 'containers/auth/SignIn';
import SignUp from 'containers/auth/SignUp';

import Wallet from 'containers/wallet/Wallet';
import Estore from 'containers/eStore/Estore';
import ProductDetail from 'containers/eStore/ProductDetail';
import Trade from 'containers/trade/Trade';

import Send from 'containers/send/Send';

const DashboardNavigator = createBottomTabNavigator(
  {
    Wallet: {
      screen: Wallet,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon name="wallet" color={tintColor} size={24} />
        ),
      }),
    },
    Estore: {
      screen: Estore,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon name="isv" color={tintColor} size={24} />
        ),
      }),
    },
    Trade: {
      screen: Trade,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon name="pay-circle-o1" color={tintColor} size={24} />
        ),
      }),
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#F8C100',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'black',
      },
    },
  },
);

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    SignIn: SignIn,
    SignUp: SignUp,
    Dashboard: DashboardNavigator,
    Send: Send,
    ProductDetail: ProductDetail,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

export default createAppContainer(AppNavigator);
