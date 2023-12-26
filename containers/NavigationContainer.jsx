// AppNavigator.js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Screen from '.././components/MainScreen';
import ARScene from '.././components/ARScene';
import DetailPage from '.././components/DetailPage';
import ARSceneChair from '.././components/ARSceneChair';
import DetailPageChair from '.././components/DetailPageChair';
import ARSceneCabinet from '.././components/ARSceneCabinet';
import DetailPageCabinet from '.././components/DetailPageCabinet';
import ARSceneOfficeChair from '.././components/ARSceneOfficeChair';
import DetailPageOfficeChair from '.././components/DetailPageOfficeChair';
const AppNavigator = createStackNavigator(
  {
    MainScreen: Screen,
    ARScreen: ARScene,
    DetailScreen: DetailPage,
    ARScreenChair: ARSceneChair,
    DetailScreenChair: DetailPageChair,
    ARScreenCabinet: ARSceneCabinet,
    DetailScreenCabinet: DetailPageCabinet,
    ARScreenOfficeChair: ARSceneOfficeChair,
    DetailScreenOfficeChair: DetailPageOfficeChair
  },
  {
    initialRouteName: 'MainScreen',
    headerMode: 'none'
  }
);

export default createAppContainer(AppNavigator);
