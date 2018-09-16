import React from 'react';
import Details from './components/Details';
import WriteUp from './components/WriteUp';
import Blogs from './components/Blogs';
import Resources from './components/Resources';
import Authenticate from './components/Authenticate'
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator(
  {
    Blogs: Blogs,
    Details: Details,
    WriteUp: WriteUp,
    Resources: Resources,
    Authenticate:Authenticate,
  },
  {
    initialRouteName: 'Authenticate',
    headerMode:'none',
  }
);

export default class App extends React.Component {
  
  render() {
    return (
        <RootStack />
    );
  }
}


