import React from 'react';
import moment from 'moment';
import { StyleSheet, Text, TouchableOpacity,View, TouchableWithoutFeedback } from 'react-native';

export default class Articles extends React.Component{

    onPress = () =>{
        console.log("MotherFucker")
        this.props.navigation.navigate('Details')
     }

    render(){
        const time = moment(moment.now()).fromNow();
        // const navigation = {this.props.navigation}
        return(
            <View style = {{flex:1, alignItems:'center',marginTop:50}}>
                <TouchableOpacity
                onPress = {this.onPress}
                style = {styles.card}>
            
                <View style =  {styles.titleContainer}>
                    <Text style = {styles.title} numberOfLines = {1}>{this.props.title}</Text>
                </View>
                <Text 
                    style = {styles.content}
                    numberOfLines = {4}
                >
                {this.props.content}
                </Text>
                <Text style = {styles.timeText}>{time}</Text>
                </TouchableOpacity>
            </View>
           
        );
    }
  
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: 'white',
        height: 200,
        width: 350,
        shadowOffset:{height:19},
        shadowRadius: 38,
        shadowOpacity: 0.2,
        padding: 10,
        borderRadius: 10,
    },

    titleContainer:{
        padding:10 ,
        backgroundColor:'black',
    },

    title:{
        fontWeight: 'bold',
        fontSize: 24,
        color:'white',
    },

    content:{
        flex:1,
        marginTop: 10,
        fontSize:18,
    },

    timeText:{
        fontWeight:'400',
        fontStyle: 'italic',
        position:'absolute',
        bottom:10,
        right: 15,
    },

});