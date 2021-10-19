import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, ImageBackground} from 'react-native';

function ComponenteEncabezado(props){
    return(
        <View>
            <ImageBackground source={{uri: props.img}} style={Styles.imagenFondo}>
                <Text style={[Styles.textoFondo, Styles.shadowText]}>{props.title}</Text>
            </ImageBackground>
        </View>
    );
}

const Styles = StyleSheet.create({
    textoFondo: {
        color: "white",
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
    },
    imagen: {
        width: '100%',
        height: 250,
    },
    shadowText: {
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    imagenFondo: {
        flex: 2,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 28,
        borderBottomRightRadius: 108,
        height: 180,
    },
})

export default ComponenteEncabezado