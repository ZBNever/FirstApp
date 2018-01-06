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

import EIComponent,{name,age,sum} from './EIComponent';

export default class App extends Component<{}> {

  constructor(props){
    super(props);
      this.state=({
          remove:false,
          result:''
      })
  }

  render() {

    return (
      <View style={styles.container}>
          <Text style={{fontSize:20}}>名字:{name}</Text>
          <Text style={{fontSize:20}}>年龄:{age}</Text>
          <Text
            style={{fontSize:20}}
            onPress={()=>{
             var result = sum(2,3);
             this.setState(
                 {
                     result:result,
                 }
             )
            }}
          >2+3={this.state.result}</Text>
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
