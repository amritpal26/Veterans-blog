import React from 'react';
import { StyleSheet, Text, ScrollView ,View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


export default class Details extends React.Component{
    state = {
        count :0,
        color:'black'
    }

    _onPress = () =>{
        if (this.state.color === 'black'){
            this.setState((prevState) => ({
                color: 'blue',
                count : prevState.count+1
            }));
        }
    }

    render()
    {
        const {navigation} = this.props;
        const title = navigation.getParam('title',"NO Title");
        const content = navigation.getParam('content',"NO Content");
        return(
            <View style = {styles.container}>
                <View style = {styles.innerView}>
                    <ScrollView contentContainerStyle = {styles.detail}>
                        <Text style = {styles.title}>{JSON.stringify(title)}</Text>
                    <Text style = {styles.content}>{JSON.stringify(content)}</Text>
                    </ScrollView>
                </View>
                <View style = {styles.share}>
                    <Icon name="star" size={30} color={this.state.color} onPress = {this._onPress}/>
                    <Text style = {{fontSize:20,fontWeight:'bold'}}> {this.state.count}     </Text>
                    <Icon name="share" size={30} />
                </View>
                <Text 
                style ={styles.bottom_close}
                onPress={() => this.props.navigation.navigate('Blogs')}
                ><Icon name="x" size={30} /></Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'black',
    },
    innerView:{
        paddingTop: 10,
        borderRadius: 5,
        height: '85%',
        marginTop: 50,
        backgroundColor:'white',
        paddingBottom:30,
    },
    bottom_close:{
        position:'absolute',
        bottom:25,
        left:175,
        fontSize:30,
        color:'white',
    },
    detail:{
        padding: 15,
        paddingBottom:20,
    },
    
    title:{
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 28,
    },

    content:{
        flex:1,
        marginTop: 10,
        fontSize:18,
    },

    share:{
        flex:1,
        flexDirection:'row',
        position:'absolute',
        bottom:70,
        height:40,
        width:'100%',
        backgroundColor: 'white',
        borderRadius: 5,
        alignItems:'center',
        paddingLeft: 10,
    },

})