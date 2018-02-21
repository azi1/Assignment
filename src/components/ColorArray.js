import React, { Component } from 'react';
import {View,TouchableOpacity} from 'react-native';
import Circle from './Circle';

class ColorArray extends Component {
    state={op1:0.3,op2:0.3,op3:0.3,op4:0.3,op5:0.3};
   
   render(){

    const {op1,op2,op3,op4,op5} = this.state;
 return(   
<View style={{flexDirection:'row', justifyContent:'center',alignItems:'center',marginTop:10}}>
<TouchableOpacity onPress={()=>{this.setState({op1:1,op2:0.3,op3:0.3,op4:0.3,op5:0.3})}}>
<Circle style={{backgroundColor:'blue'}} opacity={op1} />
</TouchableOpacity>

<TouchableOpacity onPress={()=>{this.setState({op1:0.3,op2:1,op3:0.3,op4:0.3,op5:0.3})}}>
<Circle style={{backgroundColor:'red'}} opacity={op2}  />
</TouchableOpacity>
<TouchableOpacity onPress={()=>{this.setState({op1:0.3,op2:0.3,op3:1,op4:0.3,op5:0.3})}}>
<Circle  style={{backgroundColor:'yellow'}} opacity={op3} />
</TouchableOpacity>
<TouchableOpacity onPress={()=>{this.setState({op1:0.3,op2:0.3,op3:0.3,op4:1,op5:0.3})}}>
<Circle style={{backgroundColor:'red'}} opacity={op4}  />
</TouchableOpacity>
<TouchableOpacity onPress={()=>{this.setState({op1:0.3,op2:0.3,op3:0.3,op4:0.3,op5:1})}} >
<Circle  style={{backgroundColor:'#FAE4BD'}} opacity={op5} />
</TouchableOpacity>
</View>   
 );
}
}

export default ColorArray;