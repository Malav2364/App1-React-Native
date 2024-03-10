import React from "react";
import {View, Text, useColorScheme, StyleSheet} from 'react-native';

function flexApp(): JSX.Element {
    return(
        <View>
            <View style={styles.flx}>
                <Text style={styles.border}>Malav Patel</Text>
                <Text style={styles.border}>Malav Patel</Text>
                <Text style={styles.border}>Malav Patel</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    border:{
        borderColor: 'white',
        borderWidth: 1,
        // width: 100
    },
    flx:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    }
})





export default flexApp;