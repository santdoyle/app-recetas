import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Subtitulo(props) {
    return(
        <View style={Styles.contenedor}>
            <Text style={Styles.texto}>{props.titulo}</Text>
            <Text style={Styles.subtitulo}>{props.subtitulo}</Text>
        </View>
    );
}

const Styles = StyleSheet.create({
    contenedor: {
        flexDirection: 'column',
        paddingHorizontal: 5,
        marginTop: 15,
    },
    texto: {
        color: '#333',
        fontSize: 17,
        fontWeight: 'bold'
    },
    subtitulo: {
        fontSize: 14,
    }
});

export default Subtitulo;