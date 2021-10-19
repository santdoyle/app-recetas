import React from 'react';
import {View, Text} from 'react-native';

async function DataUltimosArticulos(){
    const getData = await fetch('https://cocinacriolla.com.ar/wp-json/wp/v2/posts?per_page=10');
    const resp = await getData.json();

    return resp
}

export default DataUltimosArticulos;