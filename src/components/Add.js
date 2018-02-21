import React from 'react';
import {Dimensions,AsyncStorage} from 'react-native';
import { Container, Content, Input, Item,Button,Text,Icon,CardItem } from 'native-base';
import { connect } from 'react-redux';  
import { Field, reduxForm } from 'redux-form';
import {AddTask,UserUpdate} from '../actions';
import DatePicker from 'react-native-datepicker'
import ColorArray from './ColorArray';
import {reset} from 'redux-form';
const validate = values => {
  const error = {};
  if (!values.add) {
    error.add = 'Required';
  }
  if (!values.picker) {
    error.picker = 'Required';
  }

  return error;
};

class AddScreen extends React.Component {
  constructor() {
    super();
    this.renderInput = this.renderInput.bind(this);
 

  }
 

  

  Navigation(){
    if(this.props.success)
    {
      this.props.navigation.navigate('Home');
      this.props.UserUpdate({props:'success',value: false});
      AsyncStorage.setItem('todo',JSON.stringify(this.props.Todo)).then(()=>{
     console.log('todo saved');
    })
    .catch((error) => {
     console.log(error);
    });
  
    }
  }

  renderInput({ input, name,placeholder, type, meta: { touched, error, warning } }){
    var hasError= false;
    if(touched && error !== undefined){
      
      hasError = true;
    }
    return(<Item regular style={{margin:10,marginLeft:10,borderRadius:5}}  error= {hasError}>
                        <Input {...input}
                          placeholder={placeholder}
                          multiline={true}
                          numberOfLines={15}
                          style={{height:200}} 

                        />
                        {touched && hasError ? <Icon name='close-circle' /> :  <Text/>}

              </Item>)
  }

  renderDateTimeField = ({ input: { onChange, value, ...restInput }, label, meta: { touched, error }, ...custom }) => {
    return (
      
  
        <DatePicker
          style={{width:Dimensions.get('window').width-20,marginLeft:10}}
          date={value}
          mode='datetime'
          placeholder='When is it due?'
          format="YYYY-MM-DD h:mm"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          showIcon={false}
          customStyles={{
                
                   dateInput: {
  
                     borderTopWidth:0.5,
                     borderLeftWidth:1,
                     borderRightWidth:1,
                     borderBottomWidth:0.5,
                     borderRadius:2
                         }
                   // ... You can check the source to find the other keys.
                 }}
          onDateChange={onChange}
        />
   
    )
  }
  render() {
    const { handleSubmit,reset } = this.props;
    const submit = (values, syncErrors) => {
      console.log(values);
      
   
  
    // this.setState({array:this.state.array.push(values)});
    // console.log(this.state.array);
   this.props.AddTask(values);
    reset();
  
  }
  
    return (      
        <Container>
        <Content>
        <Field name="add"  placeholder='What do you need to do?' component={this.renderInput} />
        <Field name="picker" component={this.renderDateTimeField} /> 
      <ColorArray />
        <Button
           block 
           style={{margin:10,backgroundColor:'#2ecc71'}}
           onPress={handleSubmit(submit)}
          >
            <Text>Add</Text>
          </Button>  
          {this.Navigation()}
        </Content>
     
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.form);
const { success,Todo } = state.main;
console.log(success);

  return { success,Todo };
};

export default connect(mapStateToProps,{AddTask,UserUpdate})(reduxForm({ form: 'AddForm', validate})(AddScreen));