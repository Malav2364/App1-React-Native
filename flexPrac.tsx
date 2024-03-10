import React from "react";
import {View, Text, useColorScheme, StyleSheet, Button} from 'react-native';

function flexApp(): JSX.Element {
    return(
        <View style={styles.flx}>
            <View style={styles.border}>
                <Text>Malav Patel</Text>
            </View>
            <View style={styles.border}>
                <Text >Malav Patel</Text>
            </View>
            <View style={styles.border}>
                <Text >Malav Patel</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    border:{
        borderWidth: 2,
        borderColor: 'white',
        padding: 5,
        borderRadius: 10
    },
    flx:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})





export default flexApp;