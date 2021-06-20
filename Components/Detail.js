import React from 'react'
import {View,StyleSheet,Text,ActivityIndicator, ScrollView} from 'react-native'
import { getDetailSimulation } from '../API/getDataFromAPI'
import moment from 'moment'
import numeral from 'numeral'

export default class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            simulation: undefined,
            isLoading: true
        }
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

    componentDidMount(){
        getDetailSimulation(this.props.route.params.idSimulation).then((data) => {
            //console.log(data.data);
            this.setState({simulation: data.data});
          }).catch((error)=>{
             console.log("Api call error");
             alert(error.message);
          });
        
    }

    _displaySimulation(){
        const simulation = this.state.simulation
        if(simulation != undefined){
            return(
                <ScrollView>
                   
                    <Text style={styles.title_text}> {simulation.sim_name}</Text>
                    <Text style={styles.description_text}>Benefice: {simulation.benefice}</Text>
                    <Text style={styles.default_text}>Date du :{moment(new Date(simulation.sim_deleted)).format('DD/MM/YYYY')}</Text>
                    <Text style={styles.default_text}>Revenus : {simulation.sim_revenus} / 10</Text>
                    <Text style={styles.default_text}>Mise de fond : {simulation.sim_misefond}</Text>
                    <Text style={styles.default_text}>Assurance : {numeral(simulation.sim_assurance).format('0,0[.]00 $')}</Text>
                    <Text style={styles.default_text}>Hypotheque : {simulation.sim_hypotheque}
                    </Text>
                    <Text style={styles.default_text}>Total revenu : {simulation.sim_totales_depenses}
                    </Text>
                </ScrollView>
            )
        }
    }

    render(){
        console.log('ok detail state '+this.state)
        const idSimulation = this.props.route.params.idSimulation

        return(
            
            <View style={styles.main_container}>
                {this._displaySimulation()}
                {this._displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1
    },
    loading_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    },
    scrollview_container: {
      flex: 1
    },
    image: {
      height: 169,
      margin: 5
    },
    title_text: {
      fontWeight: 'bold',
      fontSize: 35,
      flex: 1,
      flexWrap: 'wrap',
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
      marginBottom: 10,
      color: '#000000',
      textAlign: 'center'
    },
    description_text: {
      fontStyle: 'italic',
      color: '#666666',
      margin: 5,
      marginBottom: 15
    },
    default_text: {
      marginLeft: 5,
      marginRight: 5,
      marginTop: 5,
    }
  })
  