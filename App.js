/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View,AsyncStorage,ActivityIndicator,BackHandler } from 'react-native';
import {RootStack} from './src/Router';
import  {RootStackLogged} from './src/Router';;
import allReducers from './src/reducers/index.js';
import ReduxThunk from 'redux-thunk';
import { Root } from "native-base";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(allReducers, {}, applyMiddleware(ReduxThunk));
class App extends Component{
  state={loading:true,islogged:false}
  componentWillMount(){
    AsyncStorage.getItem('name').then((name)=>{
      console.log('retrieved', name);
      if(name!= null)
      {
        this.setState({islogged:true,loading:false});
      }
      else{
        this.setState({loading:false});
      }
      
  })
  .catch((error) => {
   console.log(error);
   this.setState({loading:false});
  }); 
     
  }


componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressed);
}

componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressed);
}

onBackButtonPressed() {
    return false;
}  
  ShowStack() {

if(this.state.islogged)
{
return(
  <RootStackLogged />
)
}
else{
  return(
  <RootStack/>  
  );
}
  }
 

  render() {
    if(this.state.loading)
    {
      return (
        <ActivityIndicator style={{alignSelf:'center',flex:1}} size="large"/>
      );
    }
    return(
     
  <Root>
  <Provider store={store}>
{this.ShowStack()}
  </Provider>
  </Root>
      
    );
  }
}


export default App;


