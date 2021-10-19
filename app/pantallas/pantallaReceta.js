import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ScrollView, StyleSheet} from 'react-native';
import DataArticle from '../data/dataArticle';
import ComponenteEncabezado from '../componentes/estructuraArticulo/componenteEncabezado'
import ComponenteIntroduccion from '../componentes/estructuraArticulo/componenteIntroduccion'
import Subtitulo from '../componentes/componenteSubtitulo';
import CheckBox from '@react-native-community/checkbox';

function PantallaReceta({route}){
    const articleId = route.params.articleId
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const [article, setArticle] = useState({
        id: null,
        content: null,
        title: null,
        introduction: null,
        ingredientes: [],
        pasos: [],
        conclusion: null,
        imgUrl: null,
    })

    useEffect(() => {

        let unmount = false;

        if(!unmount){
            DataArticle(articleId).then(resp => {
                
                setArticle({
                    id: resp.id,
                    content: resp.content.rendered.replace(/<\/?[^>]+(>|$)/g, ""),
                    title: resp.title.rendered.replace(/<\/?[^>]+(>|$)/g, ""),
                    introduction: resp.acf.introduccion.replace(/<\/?[^>]+(>|$)/g, ""),
                    ingredientes: Object.values(resp.acf.ingredientes),
                    pasos: Object.values(resp.acf.pasos),
                    conclusion: resp.acf.conclusion.replace(/<\/?[^>]+(>|$)/g, ""),
                    imgUrl: resp.better_featured_image.source_url
                })
            })
        }

        return () => {
            unmount = true;
        }
    }, [])     

    let num = 1;
    return(
        <ScrollView>

            <ComponenteEncabezado img={article.imgUrl} title={article.title} />
            
            <View style={Styles.seccion}>
                <ComponenteIntroduccion text={article.introduction} />
            </View>

            
            <View style={[Styles.seccion, {paddingVertical: 10}]}>
                <View style={{paddingBottom: 10}}>
                <Subtitulo titulo="Ingredientes" subtitulo={`Ingredientes para tu ${article.title}`}/>
                </View>
            
                <View style={Styles.encabezado}>
                    <Text style={Styles.ingredienteText}>¿Ya tenés los ingredientes listos?</Text>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)} 
                    />
                </View>
                
                {article.ingredientes.map((el, index) => {
                    if(el !== "-"){
                        return(
                            <View key={index} style={[Styles.ingredienteRow, Styles.ingredientes]}>
                            
                            <Text key={el} style={toggleCheckBox ? [Styles.ingredienteText, Styles.tachado] : [Styles.ingredienteText]}>{el}</Text>
                            </View>  
                        )}
                    }  
                )}
            </View>

            <View>
                {article.pasos.map(el => 
                    <View key={el} style={Styles.seccion}>
                        <Text style={Styles.numero}>{num++}</Text>
                        <Text style={Styles.ingredienteText}>
                            {el.replace(/<\/?[^>]+(>|$)/g, "")}
                        </Text>
                    </View>
                )}
            </View>         
            
            <View style={Styles.seccion}>
                <ComponenteIntroduccion text={article.conclusion} />
            </View>
        </ScrollView>    
    );
}

const Styles = StyleSheet.create({
    contenedor: {
        flex: 1
    },
    seccion: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 30,
        paddingHorizontal: 15,
        marginVertical: 10,
    },
    numero: {
        backgroundColor: '#333',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: 20,
        width: 30,
        height: 30,
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 5,
        top: -12
    },
    encabezado: {
        backgroundColor: '#f9f9f9',
        padding: 5,
        marginBottom: 10,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ingredientes: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ingredienteRow: {
        paddingVertical: 5,
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    },
    ingredienteText: {
        fontSize: 16,
        
    },
    tachado: {
        textDecorationLine: 'line-through', textDecorationStyle: 'solid'
    }
})

export default PantallaReceta;