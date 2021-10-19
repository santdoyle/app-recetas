import React from 'react';
import {View, Text} from 'react-native';

async function DataArticle(id){
    const req = await fetch('https://cocinacriolla.com.ar/wp-json/wp/v2/posts/' + id)
    const resp = req.json();
    
    return resp

}

export default DataArticle;