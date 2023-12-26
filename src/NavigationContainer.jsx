// AppNavigator.js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Screen from './components/MainScreen';
import ARScene from './components/ARScene';
import DetailPage from './components/DetailPage';
import LoginScreen from './components/LoginScreen'
import Register from './components/RegisScreen';
import userScreen from './components/UserScreen';
import ARSceneChair from './components/ARSceneChair';
import DetailPageChair from './components/DetailPageChair';
import ARSceneCabinet from './components/ARSceneCabinet';
import DetailPageCabinet from './components/DetailPageCabinet';
import ARSceneOfficeChair from './components/ARSceneOfficeChair';
import DetailPageOfficeChair from './components/DetailPageOfficeChair';
import ShopList from './components/ShopList';

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    'Sign Up': Register, 
    decatalog: Screen,
    ARScreen: ARScene,
    DetailScreen: DetailPage,
    UserScreen: userScreen,
    ARScreenChair: ARSceneChair,
    DetailScreenChair: DetailPageChair,
    ARScreenCabinet: ARSceneCabinet,
    DetailScreenCabinet: DetailPageCabinet,
    ARScreenOfficeChair: ARSceneOfficeChair,
    DetailScreenOfficeChair: DetailPageOfficeChair,
    Shop: ShopList,
  },
  {
    initialRouteName: 'Sign Up',
    defaultNavigationOptions: {
      headerShown: true,
      headerStyle: {
        backgroundColor: '#fff',
        elevation: 0,
        shadowOpacity: 0
      },
      headerTitleAlign:'center',
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: 'bold'
      }
    },
  }
);

LoginScreen.navigationOptions = {
  headerLeft: () => null
}

Register.navigationOptions = {
  headerLeft: () => null
}

export default createAppContainer(AppNavigator);
