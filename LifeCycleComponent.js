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

    constructor(props){
        super(props);
        console.log('----constructor-----');
        this.state = {
            count:0,
        }}

    componentWillMount(){
    console.log('----componentWillMount-----');
    }

    componentDidMount(){
        console.log('----componentDidMount-----');
    }

    componentWillReceiveProps(nextProps){
        console.log('----componentWillReceiveProps-----');
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('----shouldComponentUpdate-----');

        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log('----componentWillUpdate-----');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('----componentDidUpdate-----');
    }

    componentWillUnmount(){
        console.log('----componentWillUnmount-----');
}

  render(){
    return <View>
        <Text
            style={{fontSize:20,backgroundColor:'red'}}
            onPress={()=>{
                this.setState({
                    count:this.state.count+1,
                })
            }}
        > 有本事你打我啊 </Text>
        <Text style={{fontSize:20}}>被打了{this.state.count}次</Text>
    </View>
}
}
