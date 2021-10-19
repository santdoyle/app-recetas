import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DataCategorias from '../data/dataCategorias';


function Categorias(){
    const navigation = useNavigation();
    
    const Item = ({title, cuenta, imagen, id, name}) => {
       
        return(
            <TouchableOpacity onPress={({titulo}) => navigation.navigate('PantallaCategoria', {
                categorieId: id,
                categorieName: name
            })} style={Styles.contenedorItem}>
                <Image source={{uri: imagen}} style={Styles.imagen}/>
                <View style={Styles.contenedorTexto}>
                    <Text style={Styles.texto}>{title}</Text>
                    <Text style={Styles.cantidad}>({cuenta})</Text>
                </View>
            </TouchableOpacity>
        );
    }

    const renderItem = ({item}) => {
       return <Item title={item.name} cuenta={item.count} id={item.id} name={item.name}/>
    }

    const [data, setData] = useState(null);
    const [cargando, setCargando] = useState(true)
    useEffect(() => {
        DataCategorias().then(
            response => {
                setData(response)
                setCargando(false)
            }
        )
        })
    
    return(
        <View style={Styles.contenedor}>
            {cargando 
            
            ? 
            
            <ActivityIndicator size="large" color="#333"/> 
            
            :

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                horizontal={true}
            />
            }
        </View>
        
        );
}

const Styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
    },
    contenedorItem: {
        flex: 1,
        borderRadius: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 1,
        width: '50%',
        margin: 5,
    },
    imagen: {
        width: '100%',
        height: 110,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        resizeMode: 'cover'
    },
    contenedorTexto: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center',
        width: 150
    },
    texto: {
        color: '#333',
        fontSize: 15,
        fontWeight: 'normal',
    },
    cantidad: {
        fontSize: 14,
    }
});

export default Categorias;