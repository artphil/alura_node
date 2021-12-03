import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from "@react-navigation/native";

import { cores } from "./estilos";

import Servicos from './telas/Servicos'
import Carrinho from "./telas/Carrinho";

const Tab = createBottomTabNavigator();

export default function Rotas() {
    return <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: cores.roxo,
                tabBarInactiveTintColor: cores.claro,
                tabBarActiveBackgroundColor: cores.roxo,
                tabBarInactiveBackgroundColor: cores.claro,

                tabBarStyle: {
                    height: 70
                },
                tabBarLabelStyle: {
                    width:'100%',
                    flex: 1,
                    fontWeight: 'bold',
                    fontSize: 16,
                    lineHeight: 21,  
                    marginTop: 3,
                    paddingTop: 21,
                    backgroundColor: cores.laranja
                },
                tabBarHideOnKeyboard: true
            }}>
            <Tab.Screen name='Serviços' component={ Servicos } />
            <Tab.Screen name='Carrinho' component={ Carrinho } />
        </Tab.Navigator>
    </NavigationContainer>
}