import React from 'react';
import { AsyncStorage } from 'react-native';
import {UserUpdate,DeleteRow} from '../actions';
import {connect} from 'react-redux';
import { ListView,Alert } from 'react-native';
import { Container, Content, Button, Icon, List, ListItem, Text,Body } from 'native-base';


class HomeScreen extends React.Component {
    componentDidMount(){
      AsyncStorage.getItem('name').then((name)=>{
        console.log('retrieved', name);
       // dispatch({ type: LOGIN_SUCCESS, payload: name });
          this.props.UserUpdate({props:'name',value: name});
          this.props.UserUpdate({props:'success',value: false});
        
    })
    .catch((error) => {
     console.log(error);
    }); 
          
    }
    constructor(props) {
      super(props);
      this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      this.state = {
        basic: true,
        listViewData: this.props.Todo,
      };
    }
    deleteRow(secId, rowId, rowMap) {
      console.log(rowId);
      rowMap[`${secId}${rowId}`].props.closeRow();
      Alert.alert(
        'Oops',
        'Are you sure you want to delete this Todo task?',
        [
          { text: 'No'},
          { text: 'Yes', onPress: () => {  this.props.DeleteRow(rowId,this.props.Todo);
                                          this.setState({ listViewData: this.props.Todo});
                                        
          } },
        ],
      )
    
     // newData.splice(rowId, 1);
  
      
    }

    render() {
      const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      return (
        <Container>
          
          <Content>
            <List
              dataSource={this.ds.cloneWithRows(this.props.Todo)}
              renderRow={data =>
                <ListItem style={{padding:10}}>
                <Body>
                  <Text style={{fontSize:25}}> {data.add} </Text>
                  <Text style={{paddingLeft:5,fontSize:12}}> Due {data.picker} </Text>
                  </Body>
                </ListItem>}
              renderLeftHiddenRow={data =>
                <Button full success>
                  <Icon active name="done-all" />
                </Button>}
              renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                  <Icon active name="trash" />
                </Button>}
              leftOpenValue={75}
              rightOpenValue={-75}
            />
          </Content>
        </Container>
      );
    }
  }
  const mapStateToProps = (state) => {
    // console.log(state.form);
  const { Todo } = state.main;
  console.log(Todo);
  
    return { Todo };
  };
  

export default connect(mapStateToProps,{UserUpdate,DeleteRow})(HomeScreen);
