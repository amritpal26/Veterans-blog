import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native'


const LoginInput = ({label, value, onChangeText, placeholder, secureTextEntry}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput 
                autoCorrect={false} 
                onChangeText={onChangeText} 
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
                value={value}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        borderColor: '#eee',
        borderBottomWidth: 2,
    
    },

    label:{
        padding: 5,
        paddingBottom: 10,
        fontSize: 15,
        fontWeight: '700',
        color: '#333',
    
    },

    input:{
        marginTop: 5,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 20,
        color: '#333',
        fontSize: 16,
        fontWeight: '700',
    }
});

export {LoginInput}