
import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export function TelaB({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Tela B</Text>
        <TouchableOpacity 
        style = {{margin: '5%', width: '40%', alignSelf: 'center',  backgroundColor: 'black', padding: '10%'}}
        onPress={() => navigation.navigate('Tela A')}
        >
            <Text style = {{alignSelf: 'center', color: 'white'}}>
                Tela B
            </Text>
        </TouchableOpacity>
      </View>
    );
  }