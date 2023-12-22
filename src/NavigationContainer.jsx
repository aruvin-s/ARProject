// AppNavigator.js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Screen from './components/MainScreen';
import ARScene from './components/ARScene'; // Import your AR component
import DetailPage from './components/DetailPage';
import LoginScreen from './components/LoginScreen'
import Register from './components/RegisScreen';
import userScreen from './components/UserScreen';

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    'Sign Up': Register, 
    decatalog: Screen,
    ARScreen: ARScene,
    DetailScreen: DetailPage,
    UserScreen: userScreen
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
