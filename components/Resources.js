import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
import Articles from './WriteUpResourceArticle';

export default class Resources extends React.Component{
    render(){
        return(
            <View style = {StyleSheet.container}>
            </View>
        );
    }

    state = {
        loading:false,
        data: []
    }

    componentWillMount(){
        firebase.database().ref('resources').on('value', (data) => {
            var items = [];
            data.forEach((child) => {
              items.push({
                 title: child.val().title,
                 url: child.val().url,
       
              });
           });
       
           this.setState({ data: items.reverse()});
          })
          
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
                            onPress = {() =>this.props.navigation.navigate('Details',{
                                title: item.title,
                                content: item.content,
                            }
                            )} 
                            title = {item.title} url = {item.url} />)}
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


