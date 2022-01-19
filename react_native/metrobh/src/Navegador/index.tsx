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
interface ITelas {
  nome: String,
  componente: React.ReactNode,
  icone: string
}
const telas = [
  { nome: 'Home', icone: 'subway', componente: HomeScreen },
  { nome: 'Settings', icone: 'map', componente: SettingsScreen },
];

const Tab = createBottomTabNavigator();

export default function Navegador() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {telas.map(tela => 
        <Tab.Screen
        key={tela.nome}
        data-testID={tela.nome}
        name={tela.nome}
        component={tela.componente}
        options={{
          tabBarIcon: ({ color }) => <Icone nome={tela.icone} cor={color} />,
        }}
        />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}