import React from 'react';
import { StackNavigator,TabNavigator,TabBarBottom } from 'react-navigation';
import HomeScreen from './components/Home';
import LoginScreen from './components/Login';
import AddScreen from './components/Add';
import ProfileScreen from './components/Profile';
import { Icon } from 'native-base';

const HomeTabStack = TabNavigator(
    {
      Home: { screen: HomeScreen,
        navigationOptions:  {
          title: 'Todo',
      
      }
      },
      Add: { screen: AddScreen,
        navigationOptions:  {
          title: 'Add',
      }
      },
      profile:{ screen:ProfileScreen,
        navigationOptions: {
          header: null
      }}
    },
    {
        navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Home') {
              iconName = `list-box`;
            } else if (routeName === 'profile') {
              iconName = `person`;
            } else if (routeName === 'Add') {
                iconName = `add`;
              }
    
            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return <Icon name={iconName} color={'gray'} active={true} style={{color:tintColor,fontSize:40}} />;
          },  
        }),
    
      tabBarOptions: {
        activeTintColor: '#2ecc71',
        inactiveTintColor: '#DFDFDF',
        showLabel: false,
        style: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor:'#DFDFDF'
        },
      },
     
      tabBarComponent: TabBarBottom,
      tabBarPosition: 'bottom',
      animationEnabled: false,
      swipeEnabled: false,
    },{lazy:true}
  ); 


 export const RootStack = StackNavigator(
    {
      Home: {
        screen: HomeTabStack,
    
        navigationOptions:  { 
          gesturesEnabled: false,
          headerLeft: null,
          headerTintColor: '#FFFFFF',
          headerStyle: {
            backgroundColor: '#2ecc71', 
            elevation: null,
          },
        
      }
      },
      Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null,
          gesturesEnabled: false,

        }
      },
    },
    {
      initialRouteName: 'Login',
      headerMode: 'screen',
      cardStyle: { backgroundColor: '#FFFFFF' },
    });

   export  const RootStackLogged = StackNavigator(
      {
        Home: {
          screen: HomeTabStack,
      
          navigationOptions:  { 
            gesturesEnabled: false,
            headerLeft: null,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#2ecc71', 
              elevation: null,
            },
          
        }
        },
        Login: {
          screen: LoginScreen,
          navigationOptions: {
              header: null,
            gesturesEnabled: false,
  
          }
        },
      },
      {
        initialRouteName: 'Home',
        headerMode: 'screen',
        cardStyle: { backgroundColor: '#FFFFFF' },
      });


