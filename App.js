import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import Calcul from './Components/Calcul';
import ListeSimulations from './Components/ListeSimulations';
import Comparer from './Components/Comparer';
import Liste from './Components/Liste';
import StripeCheckout from './Components/StripeCheckout';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StripeStackNavigator,MainStackNavigator,DetailStackNavigator,ListeStackNavigator,ComparerStackNavigator,LoginStackNavigator,RegisterStackNavigator } from "./Navigation/StackNavigator";
import {Provider} from 'react-redux'
import Store from './Store/configureStore'

const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Provider store={Store}>
      <Tab.Navigator
      initialRouteName="Home"
      barStyle={{ paddingBottom: 48 }}
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        
      }}>
      <Tab.Screen
       name="Home"
       component={MainStackNavigator}
       options={{
        tabBarLabel: 'Accueil',
        tabBarIcon: () => {
          return <Image
            source={require('./assets/images/home_icon.png')}
            style={styles.icon}/>
        }
      }}
      />
      <Tab.Screen
       name="Liste"
       component={ListeStackNavigator}
       options={{
        tabBarLabel: 'Liste Simulations',
        tabBarIcon: () => {
          return <Image
            source={require('./assets/images/list_icon.png')}
            style={styles.icon}/>
        }
      }}
       />
    
      <Tab.Screen
       name="StripeCheckout"
       component={StripeStackNavigator}
       options={{
        tabBarLabel: 'Paiement Stripe',
        tabBarIcon: () => {
          return <Image
            source={require('./assets/images/payment_icon.png')}
            style={styles.icon}/>
        }
      }}
      />
    </Tab.Navigator>
    </Provider>
    
  );
}

export default class App extends React.Component {
  render(){
    return (
      <NavigationContainer>
          <MyTab />
      </NavigationContainer>
    );
  }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 30,
    height: 30
  }
});
