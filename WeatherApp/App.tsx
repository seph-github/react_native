import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StackNavigationProp } from "@react-navigation/stack";
import HomeScreen from './src/screens/HomeScreen';
import ResultScreen from './src/screens/ResultScreen';

export type StackParamList = {
  'Home': undefined;
  'Result': { data: { String: undefined } };
};

const RootStack = createNativeStackNavigator<StackParamList>();

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='Home'>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Result" component={ResultScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;