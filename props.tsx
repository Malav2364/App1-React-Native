import React from "react";
import {View, Text, Image} from "react-native";

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
            <Image 
                source={{
                    uri:'https://reactnative.dev/docs/assets/p_cat2.png'
                }}
                style={{
                    width:200,
                    height:200
                }}
            />
        </View>
    )
}

export default Cafe;