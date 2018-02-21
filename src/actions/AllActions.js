import React from 'react';
import { AsyncStorage,Alert } from 'react-native';
import {LOGIN_SUCCESS,LOADING,USER_UPDATE, ADD_TASK,DELETE_TASK} from './types';


export const Login = ({name}) => {
console.log("login",name);

return(dispatch) => {
dispatch({type:LOADING});
AsyncStorage.setItem('name', name).then(()=>{
        console.log('saved');
        dispatch({ type: LOGIN_SUCCESS, payload: name });
    })
    .catch((error) => {
     console.log(error);
    }); 
}
   
};


export const UserUpdate = (values) => {
    console.log(values);
    return {
      type: USER_UPDATE,
      payload: values
    };
  };

export const AddTask = (values) => {
    var current_date = new Date();
    var picker_date = new Date(values.picker);
    var yesterday = current_date.getDate() - 1;
    var tommorow = current_date.getDate() +1;
    console.log(yesterday,"y");
    
    console.log("current",current_date,"picker",picker_date);
    
    if(picker_date.getDate() == current_date.getDate())
    {
      console.log("today");
      values.picker = 'Today';
     
    }
    if(picker_date.getDate()== yesterday)
    {
      console.log("yesterday");

       values.picker = 'Yesterday';
    }
    if(picker_date.getDate() == tommorow)
    {
      console.log("tommorow");
      values.picker = 'Tommorow';

    }
    

    return {
        type: ADD_TASK,
        payload: values
    };
    
};



export const DeleteRow = (id,array) => {


    array.splice(id, 1);
    console.log(array);
   return {
       type: DELETE_TASK,
       payload: array,
   };
   };
   