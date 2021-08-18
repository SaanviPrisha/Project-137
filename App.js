import React from 'react';
import MainScreen from './MainScreen';
import DetailsScreen from './Details';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const appStackNavigator = createStackNavigator(
  {
    Home:{
      screen: MainScreen,
      navigationOptions:{headerShown:false}
    },
    Details:{
      screen:DetailsScreen
    }
  },
  {
    initialRouteName:"Home"
  }
)
const AppContainer = createAppContainer(appStackNavigator);