import React from 'react';
import {View,TouchableHighlight} from 'react-native';



const Circle = ({style,opacity}) => {
    const { viewStyle } = styles;
return(

<View style={[viewStyle,style,{opacity:opacity}]}/>


);
};

const styles = {
    viewStyle:{
        width:50,
        height:50,
        borderRadius:50,
        margin:7
    }


};
export default Circle;