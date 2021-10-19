import React from 'react';
import {View, Text, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import ImagenFondo from '../assets/imagenFondo.jpg';
import BarraDeBusqueda from '../componentes/componenteBarraBusqueda';
import Categorias from '../componentes/componenteCategoria';
import Subtitulo from '../componentes/componenteSubtitulo';
import ComponenteUltimosArticulos from '../componentes/componenteUltimosArticulos';
import TiposRecetas from '../componentes/componenteTiposRecetas';

function PantallaInicio(){
    return(
        <ScrollView style={Styles.contenedor}>
                <ImageBackground source={ImagenFondo} style={Styles.imagenFondo}>
                    <View style={Styles.contenedorTextos}>
                        <Text style={[Styles.textoFondo, Styles.shadowText]}>Del Buen Comer</Text>
                        
                        <View style={Styles.descripcion}>
                            <Text style={[Styles.textoDescripcion, Styles.shadowText]}>Las mejores recetas para hacer en casa</Text>
                        </View>
                    </View>
                    
                    
                    <BarraDeBusqueda />
                </ImageBackground>
            
            <Subtitulo titulo="Categorias" subtitulo="¿Qué queres cocinar hoy?" name="folder"/>
            <View style={Styles.contenedorCategoria}>
                <Categorias />
            </View>

            <View style={[{height: 200, marginVertical: 10,}]}>
                <TiposRecetas />
            </View>
            
            <Subtitulo titulo="Últimas recetas" subtitulo="Las recetas más recientes" name="folder"/>
            <View style={Styles.contenedorSeccion}>
                <ComponenteUltimosArticulos screen={'ultimos-articulos'} horizontal={true}/>
            </View>
        </ScrollView>
    );
}

const Styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#fff',

    },
    shadowText: {
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    contenedorTextos: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    descripcion: {
        padding: 10,
        width: '60%',  
    },
    textoDescripcion : {
        color: '#fff',
        textAlign: 'center',
    },
    imagenFondo: {
        flex: 2,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 28,
        borderBottomRightRadius: 108,
    },
    textoFondo: {
        color: "white",
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
    },
    contenedorCategoria: {
        flex: 2,
        paddingVertical: 10,
        paddingHorizontal: 5,
        height: 220,
    },
    contenedorSeccion: {
        paddingVertical: 20,
    }
});

export default PantallaInicio;