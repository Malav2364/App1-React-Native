import React from "react";
import {View, Text} from "react-native";

type CattProps = {
    name:string;
}

const Cat = (props:CattProps) =>{
    return(
        <Text>This is cat name {props.name}</Text>
    )
}

const Cafe = () => {
    return(
        <View>
            <Text>Welcome!!</Text>
            <Cat name="Malav"/>
            <Cat name="aarav"/>
        </View>
    )
}

export default Cafe;