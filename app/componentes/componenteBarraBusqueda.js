import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

function BarraDeBusqueda(){
    return(
        <View style={Styles.barra}>
            <Ionicons name="search-circle" size={30} color="#333"/>
            <TextInput placeholder="¿Quá vas a cocinar?" style={Styles.TextInput}/>
        </View>
    );
}

const Styles = StyleSheet.create({
    barra: {
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        margin: 10,
        width: '70%',
        borderRadius: 5,
    },
    TextInput: {
        color: '#333'
    }
});

export default BarraDeBusqueda