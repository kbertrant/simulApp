import React from "react";
import {StyleSheet, View, FlatList,Text,ActivityIndicator } from "react-native";
import { getTokenBySecret, getSimulationList } from '../API/getDataFromAPI'
import SimulationItem from "./SimulationItem";
import { Button } from 'react-native-paper';
import TextInput from "react-native-input-validator";
import {connect} from 'react-redux'
 class Liste extends React.Component{
  
    constructor(props) {
        super(props)
        
        this.state = {
          token:'',
          simulations: [],
          comparer: [],
          isLoading: true
        }
      }

      componentDidMount(){
        this._loadFilms();
     }
    
      _loadFilms() { 
            this.setState({ isLoading: true }) // Lancement du chargement
              getSimulationList('1WGGIrhddXByFXa0').then(data => {
                this.setState({ simulations: data.data,
                  isLoading:false
              })
              //console.log(data.data)
          })
        
      }
    
     _displayDetailSimulation = (simulation) => {
       //console.log(simulation)
       this.state.comparer.push(simulation)
       //this.props.navigation.navigate("Detail", {idSimulation: idSimulation})
     }

     _comparer(){
      const tablecompare = this.state.comparer
      console.log(tablecompare)
      
      const action = {type:"ADD_SIMULATION", value:tablecompare}
      this.props.dispatch(action)
      this.props.navigation.navigate('Comparer')
     }

     

      _displayLoading() {
        if (this.state.isLoading) {
          return (
            <View style={styles.loading_container}>
              <ActivityIndicator size='large' />
            </View>
          )
        }
      }
    

      render() {
         //console.log(this.props)
        
        return (
          <View style={styles.main_container}>
            
            {this._displayLoading()}
            <FlatList
              data={this.state.simulations}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => <SimulationItem simulation={item} displayDetailSimulation={this._displayDetailSimulation}/>}
            />
            { this.state.isLoading ?
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                </View>
                : null
            }
            {this._displayLoading()}
            <Button style={styles.buton1}
                    mode="contained"
                    onPress={() => this._comparer()}
                  >Comparer</Button>
                  <Button style={styles.buton2}
                    mode="contained"
                    onPress={() => (console.log('suppression'))}
                  >Supprimer</Button>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      marginTop: 20
    },
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
    },
    buton1: {
      marginTop: 5,
      padding: 5
    },
    buton2: {
      marginTop: 5,
      padding: 5
    },
    title_text: {
      fontWeight: 'bold',
      fontSize: 20,
      paddingRight: 5,
      margin:10
    },
    buton: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 20,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
      },
      loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      }
  })
  const mapStateToProps = (state) => {
    const { comparer } = state
    return { comparer }
  }

  export default connect(mapStateToProps)(Liste)
