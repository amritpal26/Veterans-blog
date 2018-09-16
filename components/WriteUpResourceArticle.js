import React from 'react';
import moment from 'moment';
import { StyleSheet, Text, TouchableOpacity,View } from 'react-native';

export default class Articles extends React.Component{

    // _onPress = () =>{
    //      this.props.navigation.navigates('Det',{
    //          title: this.props.title,
    //          url: this.props.url,
    //          votes: this.props.votes,
    //      });
    //  }

    render(){
        const time = moment(moment.now()).fromNow();
        return(
            <View style = {{flex:1, alignItems:'center',marginTop:20}}>
            <TouchableOpacity
            // onPress = {this._onPress}
            style = {styles.card}>
                <View style =  {styles.titleContainer}>
                    <Text style = {styles.title} numberOfLines = {2}>{this.props.title}</Text>
                </View>
                <Text 
                    style = {styles.url}
                    numberOfLines = {4}
                >
                {this.props.url}
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
        height: 100,
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

    url:{
        flex:1,
        marginTop: 5,
        fontSize:15,
    },

    timeText:{
        fontWeight:'400',
        fontStyle: 'italic',
        position:'absolute',
        bottom:10,
        right: 15,
    },

});