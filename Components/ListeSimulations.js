import React from 'react'
import { StyleSheet, Text, View, ScrollView, Alert, ActivityIndicator, SectionList } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { TextInput,Button } from 'react-native-paper';

export default class ListeSimulations extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['','Nom du projet', 'Date', 'Benefice'],
            tableData1: [
              ['','PROJET 1','12/04/2021', '120'],
              ['','PROJET 2','12/04/2021', '345'],
              ['','PROJET 3','12/04/2021', '567'],
              ['','PROJET 4','12/04/2021', '120'],
              ['','PROJET 5','12/04/2021', '345'],
              ['','PROJET 6','12/04/2021', '567'],
              ['','PROJET 7','12/04/2021', '120'],
              ['','PROJET 8','12/04/2021' ,'345']
            ]
        }
    }
    render(){
        return(
            <View style={styles.content_container}> 
              <Text style={styles.title_text}>Liste des simulations</Text>
                <Table borderStyle={{borderWidth: 3, borderColor: '#c8e1ff'}} style={{margin:10}}>
                    <Row data={this.state.tableHead} style={styles.head} textStyle={styles.vote_text}/>
                    <Rows data={this.state.tableData1} textStyle={styles.vote_text}/>
                </Table>

                <Button style={styles.buton}
                    mode="contained"
                    onPress={() => this.props.navigation.navigate('Liste')}
                  >Afficher</Button>
                  
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
      marginTop: 5,
      padding: 5
    },
    buton1: {
      marginTop: 5,
      padding: 5
    },
    buton2: {
      marginTop: 5,
      padding: 5
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