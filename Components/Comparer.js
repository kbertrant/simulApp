import React from 'react'
import { StyleSheet, Text, View, TextInput,ScrollView, Alert, ActivityIndicator, SectionList } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Comparer extends React.Component{
  
    constructor(props) {
        super(props);
        
        this.state = {
            tableHead: ['Rubrique','PROJET 1', 'PROJET 2', 'PROJET 3'],
            tableCompare: [
              ['Prix achat','$200','$350', '$600'],
              ['Hypotheque','$200','$350', '$600'],
              ['Taxes scolaires et municipales','$200','$350', '$600'],
              ['Assurance','$200','$350', '$600'],
              ['Autres charges','$200','$350', '$600'],
              ['Loyers','$200','$350', '$600'],
              ['Autres revenus','$200','$350', '$600'],
              ['Benefice','$200','$350' ,'$600']
            ]
        }
    }

    
    render(){
      console.log(this)
        return (
            <View style={styles.content_container}>
                <Text style={styles.title_text}>Comparer les projets</Text>
                <Table borderStyle={{borderWidth: 3, borderColor: '#c8e1ff'}} style={{margin:10}}>
                    <Row data={this.state.tableHead} style={styles.head} textStyle={styles.vote_text}/>
                    <Rows data={this.state.tableCompare} textStyle={styles.vote_text}/>
                </Table>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    content_container: {
      flex: 1,
    },
    scrollView: {
        marginHorizontal: 2,
      },
    content_container1: {
        flex: 3,
    },
    buton: {
      margin: 20,
      padding: 30
    },
    header_container: {
      flex: 3,
      flexDirection: 'row'
    },
    title_text: {
      fontWeight: 'bold',
      fontSize: 20,
      paddingRight: 5,
      margin:10
    },
    
  })