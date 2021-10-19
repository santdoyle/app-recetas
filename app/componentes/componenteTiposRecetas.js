import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function TiposRecetas(){
    return(
        <View style={Styles.contenedor}>
            <View style={Styles.contenedorRow}>
                <View style={Styles.contenedorImagen}>
                    <Image source={require('../assets/barbacue.png')} style={Styles.imagen}/>
                    <Text style={Styles.texto}>Asado</Text>
                </View>
                <View style={Styles.contenedorImagen}>
                    <Image source={require('../assets/small-oven.png')} style={Styles.imagen}/>
                    <Text style={Styles.texto}>Al horno</Text>
                </View>
                <View style={Styles.contenedorImagen}>
                    <Image source={require('../assets/microwave.png')} style={Styles.imagen}/>
                    <Text style={Styles.texto}>Microondas</Text>
                </View>
                
            </View>
            
            <View style={Styles.contenedorRow}>
                <View style={Styles.contenedorImagen}>
                    <Image source={require('../assets/steam.png')} style={Styles.imagen}/>
                    <Text style={Styles.texto}>Al vapor</Text>
                </View>
                <View style={Styles.contenedorImagen}>
                    <Image source={require('../assets/frying-pan.png')} style={Styles.imagen}/>
                    <Text style={Styles.texto}>Frito</Text>
                </View>
                <View style={Styles.contenedorImagen}>
                    <Image source={require('../assets/pot.png')} style={Styles.imagen}/>
                    <Text style={Styles.texto}>Hervido</Text>
                </View>
            </View>
        </View>
    );
}

const Styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#f6f6f6',
        
    },
    contenedorRow: {
        padding: 10,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    contenedorImagen: {
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    imagen: {
        width: 50,
        height: 50,
    },
    texto: {
        fontSize: 14,
    }
});

export default TiposRecetas;