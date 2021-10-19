import Ract from 'react';
import {View, Text} from 'react-native';


async function DataArticlesByCategorie(id){
    try {
        const req = await fetch('https://cocinacriolla.com.ar/wp-json/wp/v2/posts/?categories=' + id)
        const resp = await req.json()
        return resp  
    } catch (error) {
        console.log(error)
    }
   
}


export default DataArticlesByCategorie