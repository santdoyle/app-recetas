import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PantallaInicio from './app/pantallas/PantallaInicio';
import PantallaCategoria from './app/pantallas/pantallaCategoria';
import PantallaFavoritos from './app/pantallas/pantallaFavoritos';
import PantallaBusqueda from './app/pantallas/pantallaBusqueda';
import CategoriaNav from './app/nav/homeNav';

const TabNav = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabNav.Navigator>
        <TabNav.Screen 
        name="Inicio" 
        component={CategoriaNav}
        options={({route}) => ({
          tabBarIcon: () => {
            return <Ionicons name="home" size={25} color="#333"/>
          },
        })}
        />
        <TabNav.Screen 
        name="Tus favoritos" 
        component={PantallaFavoritos} 
        options={() => ({
          tabBarIcon: () => {
            return <Ionicons name="star" size={25} color="#333"/>
          }
        })
        }
        />
        <TabNav.Screen 
        name="Buscar" 
        component={PantallaBusqueda} 
        options={() => ({
          tabBarIcon: () => {
            return <Ionicons name="search-circle" size={35} color="#333"/> 
          },
        })
        }
        />
      </TabNav.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
