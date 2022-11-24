import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTab from './BottomTab';
import ProductScreen from '../screens/ProductScreen';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={BottomTab}>
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{presentation: 'card'}}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
