import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Container/Home';
import Statistics from './Container/Statistics';
import Match from './Container/Match';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Statistics: {
      screen: Statistics,
    },
    Match: {
      screen: Match,
    },
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
