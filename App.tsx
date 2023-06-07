// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TelaA } from './src/screens/telaA';
import { TelaB } from './src/screens/telaB';

const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela A">

        <Stack.Screen name="Tela A" component={TelaA} options={{ title: 'Tela A' }}/>
        <Stack.Screen name="Tela B" component={TelaB} options={{ title: 'Tela B' }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;