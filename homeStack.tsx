import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from './screens/HomeScreen'
// import Post from './screens/PostScreen'
// import Settings from './screens/SettingsScreen'
// import Start from './screens/StartScreen'

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
//   Post: {
//     screen: Post,
//     navigationOptions: {
//       title: 'Post',
//     },
//   },
//   Settings: {
//     screen: Settings,
//     navigationOptions: {
//       title: 'Settings',
//     },
//   },
//   Start: {
//     screen: Start,
//     navigationOptions: {
//       title: 'Start',
//     },
//   },
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: '#00b2db' },
    headerTitleStyle: { fontFamily: 'HindSiliguri-Bolder', fontSize: 20 },
    headerTintColor: '#FFF',
    headerBackTitleStyle: { fontFamily: 'HindSiliguri-Bolder', color: '#FFF', fontSize: 20 },
  },
})

export default createAppContainer(HomeStack)
