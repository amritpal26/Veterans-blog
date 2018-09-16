import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';


const LoginButton = ({onPress, children}) => {
    return(
        <TouchableOpacity onPress={ onPress } style={styles.button}>
        <Text style={styles.text}>{ children } </Text>
        </TouchableOpacity>
    );
} 

const styles = StyleSheet.create({
    button:{
        borderRadius: 10,
        padding: 15,
        backgroundColor: '#00aeef',
        alignItems: "center",
        marginTop: 5,
    },

    text:{
        color:'white',
        fontWeight: '700',
        fontSize: 16,
    }
});

export { LoginButton }