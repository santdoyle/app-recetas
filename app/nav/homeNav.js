import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PantallaInicio from '../pantallas/PantallaInicio';
import PantallaCategoria from '../pantallas/pantallaCategoria';
import PantallaReceta from '../pantallas/pantallaReceta';

const StackCategoria = createStackNavigator();

function CategoriaNav() {
  return(
    <StackCategoria.Navigator>
      <StackCategoria.Screen name="Inicio" component={PantallaInicio} options={{headerShown: false}}/>
      <StackCategoria.Screen name="PantallaCategoria" component={PantallaCategoria} options={({ route }) => ({ title: route.params.categorieName })}/>
      <StackCategoria.Screen name="PantallaReceta" component={PantallaReceta} />
    </StackCategoria.Navigator>
  );   
}

export default CategoriaNav;