/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

var name = '小明';
var age = '20';
export {name,age};

export class EIComponent extends Component{
  render(){
    return <Text style={{fontSize:20,backgroundColor:'red'}}> EIComponent </Text>
}
}

export function sum(a,b) {
    return a+b;
}