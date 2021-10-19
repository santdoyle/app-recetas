import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

async function DataCategorias(){

    const api = await fetch('https://cocinacriolla.com.ar/wp-json/wp/v2/categories/')
    const consultaApi = await api.json();
    
    return consultaApi;
    
}


export default DataCategorias;