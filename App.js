/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import LifeCycleComponent from './LifeCycleComponent';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  constructor(props){
    super(props);
      this.state=({
          remove:false
      })
  }

  render() {
    var view=this.state.remove?null:<LifeCycleComponent/>;
    var text=this.state.remove?'让他复活':'移除他';
    return (
      <View style={styles.container}>

        <Text
          style={{fontSize:20}}
          onPress={()=>{
           this.setState({
                   remove:!this.state.remove
               })
          }}
        >{text}</Text>

          {view}
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
    backgroundColor: '#8BFF92',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
