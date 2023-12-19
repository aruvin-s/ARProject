// AppNavigator.js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Screen from '.././components/MainScreen';
import ARScene from '.././components/ARScene'; // Import your AR component
import DetailPage from '.././components/DetailPage';
import ARSceneChair from '.././components/ARSceneChair'; // Import your AR component
import DetailPageChair from '.././components/DetailPageChair';

const AppNavigator = createStackNavigator(
  {
    MainScreen: Screen,
    ARScreen: ARScene,
    DetailScreen: DetailPage,
    ARScreenChair: ARSceneChair,
    DetailScreenChair: DetailPageChair
  },
  {
    initialRouteName: 'MainScreen',
  }
);

export default createAppContainer(AppNavigator);
