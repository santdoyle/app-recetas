import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function MiniaturaArticulo(props){
    const navigation = useNavigation();
 return(
     <TouchableOpacity onPress={() => navigation.navigate('PantallaReceta', {
        articleId: props.id
     })} style={Styles.contenedor}>
         <Image source={{uri: props.imagenUrl}} style={Styles.imagen} />
         <View style={Styles.contenedorTextos}>
            <Text style={Styles.titulo}>{props.title}</Text>
                <Text style={Styles.item}>
                    1p
                </Text>
         </View>
         
     </TouchableOpacity>
 );   
}

const Styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#fff',
        borderRadius: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 1,
        width: 320,
        margin: 5,
    },
    imagen: {
        width: 320,
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    contenedorTextos: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff'
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    items: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        margin: 5,
    },
    item: {
        fontSize: 14,
        fontWeight: 'bold'
    }
});
export default MiniaturaArticulo;