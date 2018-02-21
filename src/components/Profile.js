import React from 'react';
import { Container, Header, Title,Body ,Content,Button,Text} from 'native-base';
import {connect} from 'react-redux';
import {AsyncStorage} from 'react-native';

class ProfileScreen extends React.Component {
  

  onLogoutPress(){
    
AsyncStorage.multiRemove(['name','todo']) .then(() => {
  this.props.navigation.navigate('Login');
}) .catch((error) => {
  console.log(error);
});
  }

  render() {
    return (   
      <Container>
        <Header style={{  backgroundColor: '#2ecc71' }}>
        <Body>
            <Title style={{color:'#FFFFFF'}}>Hello, {this.props.name}</Title>
          </Body>
        </Header>
        <Button block bordered danger style={{marginLeft:'5%',marginRight:'5%',marginTop:'100%'}} onPress={()=>{this.onLogoutPress()}}>
            <Text>Logout</Text>
          </Button>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
   console.log(state.main);
const { name } = state.main;
console.log(name);

  return { name };
};

export default connect(mapStateToProps)(ProfileScreen);
