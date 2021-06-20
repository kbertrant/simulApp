import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import Calcul from './Calcul';
import ListeSimulations from './ListeSimulations';
const Tab = createBottomTabNavigator();

export default class MyTabNavigation extends React.Component{
    render(){
        return (
            <Tab.Navigator
              initialRouteName="Home"
              tabBarOptions={{
                activeTintColor: '#e91e63',
              }}
            >
              <Tab.Screen
                name="Home"
                component={Home}
                options={{
                  tabBarLabel: 'Home',
                }}
              />
              <Tab.Screen
                name="ListeSimulations"
                component={ListeSimulations}
                options={{
                  tabBarLabel: 'Liste des simulations',
                  tabBarBadge: 3,
                }}
              />
              <Tab.Screen
                name="Calcul"
                component={Calcul}
                options={{
                  tabBarLabel: 'Calcul',
                  
                }}
              />
            </Tab.Navigator>
          );
    }
}