// AppNavigator.js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Screen from '../components/MainScreen';
import ARScene from '../components/ARScene'; // Import your AR component
import DetailPage from '../components/DetailPage';
import LoginScreen from '../components/LoginScreen'

const AppNavigator = createStackNavigator(
  {
    LoginScreen: LoginScreen,
    MainScreen: Screen,
    ARScreen: ARScene,
    DetailScreen: DetailPage
  },
  {
    initialRouteName: 'MainScreen',
  }
);

export default createAppContainer(AppNavigator);