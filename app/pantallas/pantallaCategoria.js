import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MiniaturaArticulo from '../componentes/componenteMiniaturaArticulo';
import DataArticlesByCategorie from '../data/dataArticlesByCategorie';
import ComponenteUltimosArticulos from '../componentes/componenteUltimosArticulos';

function PantallaCategoria({route, navigation}){
    return(
        <View style={Styles.contenedor}>
        <ComponenteUltimosArticulos
            id={route.params.categorieId}
            screen={'articulos-bycategorie'}
            horizontal={false}/>
        </View>
    );
}

const Styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        width: 350,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default PantallaCategoria;