import React from "react";
import { View, Text, StyleSheet} from "react-native";

const fl_name = (
    firstname: string,
    middlename: string,
    lastname: string
) => {
    return firstname + " "  + middlename + " " + lastname;
}




const AppPro = () => {
    return <Text>Your name is {fl_name('Malav', 'Swapnil', 'Patel')}</Text>
}


export default AppPro;