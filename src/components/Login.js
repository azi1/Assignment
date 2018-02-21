import React from 'react';
import { Container, Content, Input, Item,Button,Text,Icon } from 'native-base';
import { connect } from 'react-redux';  
import { Field, reduxForm } from 'redux-form';
import {Login} from '../actions';
import {Image} from 'react-native';
const validate = values => {
  const error = {};
  if (!values.name) {
    error.name = 'Required';
  }

  return error;
};

class LoginScreen extends React.Component {
  constructor() {
    super();
    this.renderInput = this.renderInput.bind(this);
  }

  renderInput({ input, name,placeholder, type, meta: { touched, error, warning } }){
    var hasError= false;
    if(touched && error !== undefined){
      
      hasError = true;
    }
    return( <Item regular style={{marginLeft:10,marginRight:10}}  error= {hasError}>
                        <Input {...input}
                          placeholder={placeholder}    
                        />
                        {touched && hasError ? <Icon name='close-circle' /> :  <Text/>}

              </Item>

        )
  }
  Navigation(){
    if(this.props.success)
    {
      this.props.navigation.navigate('Home');
    }
  }

  render() {
    const { handleSubmit,reset } = this.props;
    const submit = (values, syncErrors) => {
    console.log("login form values",values);
    this.props.Login(values)
    reset();
  } 
    return (
        <Container style={{      flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',}}>
            <Container style={{flex:4,justifyContent: 'center',alignItems:'center'}}>
            <Image
             source={require('../imgs/todo.png')}
              />
            <Text style={{fontSize:25,fontWeight:'bold'}}> Todo </Text>
            </Container>    
        <Container style={{flex:2}}>
        <Content>
        <Field name="name"  placeholder='Name' component={this.renderInput} />

          <Button
           block 
           style={{margin:10,backgroundColor:'#2ecc71'}}
           onPress={handleSubmit(submit)}
          >
            <Text>Login</Text>
          </Button>
          {this.Navigation()}
        </Content>
      </Container>
        </Container>
        
        
     
 
    );
  }
}
const mapStateToProps = (state) => {
  // console.log(state.form);
const { success } = state.main;
console.log(success);

  return { success };
};


export default connect(mapStateToProps,{Login})(reduxForm({ form: 'loginForm', validate})(LoginScreen));
