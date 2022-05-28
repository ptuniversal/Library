import React,{Component} from "react";
import {Text,View, StyleSheet} from "react-native";

export default class TransactionScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    Hi THIS IS THE Transcation SCREEN.
                </Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"green"
    },
    text:{
        fontSize:20,
        color: "white",
        fontFamily: "sans-serif"

    }
})
