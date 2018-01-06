/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

/**
 * ES6的方式创建组建
 * 推荐使用
 */

// export default  class HelloComponent extends Component{
//   render(){
//     return <Text style={{fontSize:20,backgroundColor:'red'}}> HelloComponent </Text>
// }
// }

/**
 * 函数式创建组建
 * @param propas
 * @returns {*}
 * @constructor
 */
function HelloComponent(propas) {

  return <Text style={{fontSize:20,backgroundColor:'red'}}> Hello.{propas.name} </Text>

}

module.exports=HelloComponent;