import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icone from '../componentes/Icone';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Navegador() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => <Icone nome="subway" cor={color} />,
          }}
        />
        <Tab.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{
          tabBarIcon: ({ color }) => <Icone nome="map" cor={color} />,
        }}
        />
        <Tab.Screen 
        name="Set" 
        component={SettingsScreen} 
        options={{
          tabBarIcon: ({ color }) => <Icone nome="alert-circle-outline" cor={color} />,
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}