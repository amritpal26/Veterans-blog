import React from 'react';
import { StyleSheet, Text, View, FlatList,ScrollView, ActivityIndicator } from 'react-native';
import Articles from './Articles';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase';

export default class Blogs extends React.Component{

    state = {
        loading:false,
        data: []
    }

    componentWillMount(){

        firebase.database().ref('blogs').on('value', (data) => {
            var items = [];
            data.forEach((child) => {
              items.push({
                 title: child.val().title,
                 content: child.val().content,
       
              });
           });
       
           this.setState({ data: items.reverse()});
          })
    }

    _onPress = () => {
        this.props.navigation.navigate('Resources');
    }



    render(){
        return(
            <View styles = {styles.container}>
                <View style = {styles.scroll}>
                    <ScrollView contentContainerStyle = {styles.inside_scroll}>
                        <FlatList
                            data = {this.state.data}
                            renderItem={({item}) => (
                            <Articles
                            onPress = {() =>this.props.navigation.navigate('Details')} 
                            title = {item.title} content = {item.content} />)}
                            keyExtractor={item => item.title}
                        />
                    </ScrollView>
                </View>
                <View style = {styles.footer}>
                    <Text>
                        <Icon 
                        onPress = {() =>this.props.navigation.navigate('WriteUp')}
                        name="plus-circle" 
                        size={30}/>
                    </Text>
                    <Text>
                        <Icon 
                        onPress = {() =>this.props.navigation.navigate('Resources')}
                        name="book" 
                        size={30}/>
                    </Text>
                </View>   
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    scroll:{
        paddingTop: 10,
        height: '90%',
        marginTop: 30,
        backgroundColor:'white',
    },
    footer:{
        alignItems:'center',
        flexDirection:'row',
        position:'absolute',
        width:'100%',
        bottom:-10,
        height:40,
        justifyContent:'space-around',
    },

})