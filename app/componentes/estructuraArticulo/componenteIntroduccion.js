import React from 'react';
import {View, Text} from 'react-native';

function ComponenteIntroduccion(props){
    return(
        <View>
            <Text style={{fontSize: 16}}>{props.text}</Text>
        </View>
    );
}

export default ComponenteIntroduccion