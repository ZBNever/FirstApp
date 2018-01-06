/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
    View,
    Text,
} from 'react-native';

/**
 * ES6的方式创建组建
 * 推荐使用
 */
export default class LifeCycleComponent extends Component{

  render(){
    return <Text style={{fontSize:20,backgroundColor:'red'}}> HelloComponent </Text>
}
}
