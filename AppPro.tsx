import React from "react";

import {
    View,
    Text,
    StyleSheet,     //Used for applying css
    useColorScheme
} from 'react-native';

function AppPro() : JSX.Element { //used to return jsx components
    const isDarkMode = useColorScheme() === "light" //color Scheme defining
    return(
        <View style={styles.container}>
            <View style={styles.border}>
                <Text style={isDarkMode ? styles.darkTxt : styles.whiteTxt}>Hello World</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteTxt:{
        color: 'white'
    },
    darkTxt:{
        color: 'black'
    },
    border:{
        borderColor: 'red',
        borderWidth: 1
    }
})

export default AppPro;