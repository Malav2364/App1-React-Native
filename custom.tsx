import React from "react";
import  {View, Text} from "react-native";

const Cat  = () => {
    return(
        <View>
            <Text>This is a  Cat</Text>
        </View>
    )
    }
const cafe = () =>{
    return(
        <View>
            <Text>Welcome!!</Text>
            <Cat/>     
            <Cat/>     
            <Cat/>     
            <Cat/>     
        </View>
    )
}

export default cafe;