import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import DataUltimosArticulos from '../data/dataUltimosArticulos';
import DataArticlesByCategorie from '../data/dataArticlesByCategorie';
import MiniaturaArticulo from './componenteMiniaturaArticulo';

function ComponenteUltimosArticulos(props){
    const [dataArticulo, setDataArticulo] = useState(null);
    const [cargando, setCargando] = useState(false);

    const renderItem = ({item}) => {
        return <MiniaturaArticulo title={item.title.rendered} id={item.id} />
    }
    useEffect(() => {
        let unmounted = false;
        if(!unmounted){
            if(props.screen === 'ultimos-articulos'){
                
                DataUltimosArticulos().then(resp =>
                    setDataArticulo(resp)
                )
                
            }else if(props.screen === 'articulos-bycategorie'){
                
                DataArticlesByCategorie(props.id).then(resp => {
                    setDataArticulo(resp)
                })
            }
        }
        return () => {
            unmounted = true;
        }

    }, [])

    return(
        <View style={styles.contendor}>
           <FlatList 
            data={dataArticulo}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            horizontal={props.horizontal}
            persistentScrollbar={false}


           />
        </View>
    );
}


const styles = StyleSheet.create({
    contendor: {
        flex: 1,
        width: '100%'
    }
})

export default ComponenteUltimosArticulos;