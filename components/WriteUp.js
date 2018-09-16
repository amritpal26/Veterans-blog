import React from 'react';
import { StyleSheet, View,TextInput,Text, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

class UselessTextInput extends React.Component {
    render() {
      return (
        <TextInput
          {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
          editable = {true}
        />
      );
    }
  }

export default class WriteUp extends React.Component{
    
    state = {
        title:"",
        content:""
    }

    _onPress  = () => {
            firebase.database().ref('blogs/').push({
               title:this.state.title,
               content:this.state.content,
               count:0
            }).then(
                alert("Blog Posted"),
                this.props.navigation.navigate('Blogs')
            )
    };

    render(){
        return(
            <View style = {styles.container}>
            <Text style = {styles.header}>Writing is the painting of the voice.</Text>
                <UselessTextInput 
                    style =  {[styles.input,{height:'10%'}]}
                    placeholder = "Title"
                    multiline = {true}
                    onChangeText={(title) => this.setState({title})}
                />
                <UselessTextInput
                    placeholder = "Content"
                    style =  {[styles.input,{height:'30%'}]}
                    multiline = {true}
                    onChangeText={(content) => this.setState({content})}
                />
                <TouchableOpacity 
                style = {styles.button}
                onPress={this._onPress}
                >
                    <Text style = {styles.button__text}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style = {styles.button}
                onPress={() => this.props.navigation.navigate('Blogs')}
                >
                    <Text style = {styles.button__text}>Cancel</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:100,
        padding:20,
    },
    input:{
        backgroundColor:"rgba(165,186,255,0.2)",
        marginBottom: 10,
        padding:10,
        fontSize:18,
        borderRadius: 5,
    },

    button:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#70D1FC',
        height: 60,
        width: 200,
        borderRadius: 5,
        marginBottom: 10,
    },
    button__text:{
        fontSize:24,
        color:'white',
    },
    header:{
        fontSize:24,
        fontWeight:'bold',
        fontStyle:'italic',
        marginBottom: 10,
        color:'#70b1dC',
    },
})