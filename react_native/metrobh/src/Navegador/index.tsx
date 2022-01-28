/*
  Componente que controla a navegação entre telas do app
  Utiliza um componente do @react-navigation para criar os 
  botões inferiores e a transição de telas
*/

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icone from '../componentes/Icone';


// -------------- Telas teste a serem removidas ---------------- 
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
// --------------------------------------------------------------



const telas = [
  { nome: 'Home', icone: 'subway', componente: HomeScreen },
  { nome: 'Settings', icone: 'map', componente: SettingsScreen },
];

const Tab = createBottomTabNavigator();

function Navegador() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {telas.map(tela => 
        <Tab.Screen
        key={tela.nome}
        data-testID={'test-'+tela.nome}
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

export default Navegador;