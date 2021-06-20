import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import { getTokenBySecret } from '../API/getDataFromAPI'

export default class Home extends Component {
  constructor() {
    super();
    this.state = { 
      token: ''
    }
  }

  componentDidMount(){
    /* getTokenBySecret().then(data => {
      console.log(data)
      this.setState({ 
        token: data.data.access_token
        
      })
    }) */
  }

  render() {
       
    return (
      <View style={styles.container}>
        <Text style = {styles.textStyle}>
          Accueil
        </Text>
        <Text>Cette application vous permet d'effectuer des simulations de rentabilité de biens immobililiers. 
Les résultats sont à titre indicatif. Veuillez consulter un professionnel pour des données plus complètes.</Text>
        <Button style={styles.buton}
          mode="contained"
          onPress={() => this.props.navigation.navigate('Calcul')}
        >Commencer</Button>

<Button style={styles.buton}
          mode="contained"
          onPress={() => this.props.navigation.navigate('StripeCheckout')}
        >Paiement</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    padding: 10
  },
  buton: {
    marginTop: 40,
    padding: 5
  },
  buton1: {
    margin: 20,
    padding: 20
  },
  textStyle: {
    fontSize: 30,
    marginBottom: 20
  }
});