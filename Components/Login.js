import React from 'react'
import { StyleSheet, Text, View, Alert,Image, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { TextInput,Button } from 'react-native-paper';

export default class Login extends React.Component {
  
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      let dataToSend = {email: this.state.email, password: this.state.password};
      let formBody = [];
      for (let key in dataToSend) {
        let encodedKey = encodeURIComponent(key);
        let encodedValue = encodeURIComponent(dataToSend[key]);
        formBody.push(encodedKey + '=' + encodedValue);
      }
      formBody = formBody.join('&');
      axios.post('http://172.20.10.2:8001/api/login',formBody, {
          headers: {
              'Content-Type': 'application/json'
          },      
      }) 
      .then((response) => response.json())
        .then((responseJson) => {
            //Hide Loader
            
            console.log(responseJson);
            // If server response message same as Data Matched
            if (responseJson.status === 'success') {
            AsyncStorage.setItem('user_id', responseJson.data.email);
            console.log(responseJson.data.email);
            //navigation.replace('DrawerNavigationRoutes');
            } else {
            setErrortext(responseJson.msg);
            console.log('Please check your email id or password');
            }
        })
      .catch(function (error) {
         //Hide Loader
         
        console.error(error);
      });
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={styles.container}> 
        <Image source={{uri: '../assets/images/America_9@2x.png'}} style={styles.image}/>
          <TextInput
            style={styles.inputStyle}
            label="Email*"
            placeholder="Email*"
            value={this.state.email}
            onChangeText={(val) => this.updateInputVal(val, 'email')}
          />
          <TextInput
            style={styles.inputStyle}
            label="Mot de passe*"
            placeholder="Mot de passe*"
            value={this.state.password}
            onChangeText={(val) => this.updateInputVal(val, 'password')}
            maxLength={15}
            secureTextEntry={true}
          />   
          <Button
            mode="contained"
            onPress={() => this.props.navigation.navigate('Home')}
            //onPress={() => this.userLogin()}
          >Connexion</Button>  

          <Text 
            style={styles.loginText}
            onPress={() => this.props.navigation.navigate('Register')}>
            Vous n'avez pas un compte ? Inscrivez-vous 
          </Text>                  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 10,
    backgroundColor:'#eeeeee'
  },
  image: {
    height:30,
    width:20
    
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});