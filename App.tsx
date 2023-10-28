import React from 'react';
import TabNavigator from './src/navigator/TabNavigator';
import {colors} from 'src/utils/constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.white[100]} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
