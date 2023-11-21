// AppNavigator.js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Screen from '.././components/MainScreen';
import ARScene from '.././components/ARScene'; // Import your AR component

const AppNavigator = createStackNavigator(
  {
    MainScreen: Screen,
    ARScreen: ARScene, // Use your AR component as a screen
  },
  {
    initialRouteName: 'MainScreen',
  }
);

export default createAppContainer(AppNavigator);
