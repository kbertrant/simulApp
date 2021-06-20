import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Detail from "../Components/Detail";
import Comparer from "../Components/Comparer";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Home from "../Components/Home";
import Calcul from "../Components/Calcul";
import Liste from "../Components/Liste";
import StripeCheckout from '../Components/StripeCheckout';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Calcul" component={Calcul} />
      <Stack.Screen name="Comparer" component={Comparer} />
      <Stack.Screen name="Liste" component={Liste} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}

const DetailStackNavigator = () => {
    return (
      <Stack.Navigator >
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    );
  }

  const ComparerStackNavigator = () => {
    return (
      <Stack.Navigator >
        <Stack.Screen name="Comparer" component={Comparer} />
      </Stack.Navigator>
    );
  }

  const LoginStackNavigator = () => {
    return (
      <Stack.Navigator >
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    );
  }

  const RegisterStackNavigator = () => {
    return (
      <Stack.Navigator >
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    );
  }

  const ListeStackNavigator = () => {
    return (
      <Stack.Navigator >
        <Stack.Screen name="Liste Simulations" component={Liste} />
      </Stack.Navigator>
    );
  }

  const StripeStackNavigator = () => {
    return (
      <Stack.Navigator >
        <Stack.Screen name="StripeCheckout" component={StripeCheckout} />
      </Stack.Navigator>
    );
  }
export { StripeStackNavigator,MainStackNavigator, DetailStackNavigator,ComparerStackNavigator,LoginStackNavigator,RegisterStackNavigator,ListeStackNavigator };