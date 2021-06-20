import React from 'react'
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native'
import { TextInput,Button } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';

export default class SimulationItem extends React.Component{

    render() {
        //console.log(this.props)
        const {simulation, displayDetailSimulation} = this.props
        return (
          <TouchableOpacity
          onPress={()=> displayDetailSimulation(simulation)}
          style={styles.main_container}>
          
          <View style={styles.content_container}>
            <View style={styles.header_container}>
              <Text style={styles.title_text}>{simulation.sim_name}</Text>
            </View>
            <View style={styles.description_container}>
              <Text style={styles.description_text}>Revenus: {simulation.sim_revenus}</Text>
              <Text style={styles.description_text}>Assurance: {simulation.sim_assurance}</Text>
              <Text style={styles.description_text}>Hypotheque: {simulation.sim_hypotheque}</Text>
              <Text style={styles.description_text}>Charges: {simulation.sim_autres_charges}</Text>
              <Text style={styles.description_text}>Mise de fond: {simulation.sim_misefond}</Text>
            </View>
            <View style={styles.date_container}>
              <Text style={styles.date_text}>Date: {simulation.sim_deleted}</Text>
            </View>
          </View>
        </TouchableOpacity>
        )
      }
    }
    
    const styles = StyleSheet.create({
      main_container: {
        height: 190,
        flexDirection: 'row'
      },
      image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
      },
      checkbox: {
        alignSelf: "center",
      },
      content_container: {
        flex: 1,
        margin: 5
      },
      header_container: {
        flex: 3,
        flexDirection: 'row'
      },
      title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
      },
      vote_text: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
      },
      description_container: {
        flex: 7
      },
      description_text: {
        fontStyle: 'italic',
        color: '#666666'
      },
      date_container: {
        flex: 1
      },
      date_text: {
        textAlign: 'right',
        fontSize: 14
      }
    })