import React,{useState} from 'react'
import { StyleSheet, Text, View,ScrollView, Alert, ActivityIndicator, SectionList } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { TextInput,Button } from 'react-native-paper';
import { ajouterSimulation } from '../API/getDataFromAPI'
import Dialog,{ DialogTitle, DialogContent }  from 'react-native-popup-dialog';

export default class Calcul extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      address: '',
      amortissement: '',
      prixDemande: 0,
      prixPropose: 0,
      tauxHypo: 0,
      sim_name:'',
      sim_hypotheque:0,
      sim_loyers:0,
      sim_miseDeFond:0,
      sim_deleted:'',
      sim_taxe_mun:0,
      sim_assurance:0,
      sim_autres_charges:0,
      sim_totales_depenses:0,
      sim_totales_revenus:0,
      sim_autres_revenus:0,
      sim_status:false,
      sim_taxe_sco:0,
      sim_benefice:0,
      sim_taxes:0,
    }
  }
  _getSimName(sim_nameText){
    this.setState({sim_name: sim_nameText})
  }
    _getAddress(addressText){
      this.setState({address: addressText})
    }
    _getAmortissement(amortissementText){
      this.setState({amortissement: amortissementText})
      
    }
    _getAnnuelRevenu(annuelRevenuText){
      this.setState({sim_loyers: annuelRevenuText})
      
    }
    _getAssurance(assuranceText){
      this.setState({sim_assurance: assuranceText})
      
    }
    _getAutresCharges(autresChargesText){
      this.setState({sim_autres_charges: autresChargesText})
      
    }

    _getAutresRevenus(autresRevenusText){
      this.setState({sim_autres_revenus: autresRevenusText})
      
    }

    _getMiseFond(miseDeFondText){
      this.setState({sim_miseDeFond: miseDeFondText})
      
    }
   
    _getPrixDemande(prixDemandeText){
      this.setState({prixDemande: prixDemandeText})
      
    }
    _getPrixPropose(prixProposeText){
      this.setState({prixPropose: prixProposeText})
      
    }
    _getTauxHypo(tauxHypoText){
      this.setState({tauxHypo: tauxHypoText})
    }
    _getTaxeMun(taxeMunText){
      this.setState({sim_taxe_mun: taxeMunText})
    }
    _getTaxeScolaire(taxeScoText){
      this.setState({sim_taxe_sco: taxeScoText})
      
    }

    
    sauvegarder = () =>
    {
      console.log(this.state)
      ajouterSimulation(1,this.state.sim_name,this.state.sim_hypotheque,this.state.sim_loyers,this.state.sim_miseDeFond,
      this.state.sim_totales_revenus,this.state.sim_taxe_mun,this.state.sim_assurance, this.state.sim_autres_charges,this.state.sim_totales_depenses,
      this.state.sim_autres_revenus,this.state.sim_taxe_sco,this.state.address,
      this.state.prixDemande,this.state.sim_benefice)
      this.setState({ visible: false })
        //console.warn(data)
        //this.props.navigation.navigate("Liste")
    }   

    calculer = () => {
      let hypotheque= (parseInt(this.state.prixPropose)-parseInt(this.state.sim_miseDeFond))*(parseInt(this.state.tauxHypo)/12)/(1-Math.pow((1+parseInt(this.state.tauxHypo)/12),(-12* parseInt(this.state.amortissement))))
      let taxes= Math.round((parseInt(this.state.sim_taxe_sco) + parseInt(this.state.sim_taxe_sco))/12,2)
      let assurance= Math.round(parseInt(this.state.sim_assurance)/12,2)
      let autres_charges=  Math.round(parseInt(this.state.sim_autres_charges)/12,2)
      let totales_depenses= parseInt(this.state.sim_hypotheque) + parseInt(this.state.sim_taxes) + parseInt(this.state.sim_autres_charges) + parseInt(this.state.sim_assurance)
      let totales_revenus= Math.round((parseInt(this.state.sim_loyers)/12,2) + parseInt(this.state.sim_autres_revenus)/12,2)
      let benefice= Math.round((parseInt(totales_revenus) - parseInt(totales_depenses)))
         //console.warn(hypotheque,taxes,assurance,autres_charges,totales_depenses,totales_revenus,benefice)
      this.setState({ 
        sim_hypotheque: hypotheque,
        sim_taxes: taxes,
        sim_assurance: assurance,
        sim_autres_charges: autres_charges,
        sim_totales_depenses:totales_depenses,
        sim_totales_revenus:totales_revenus,
        sim_benefice: benefice,
        
        tableData1: [
          ['Hypotheque mensuelle', hypotheque ],
          ['Taxes scolaires et municipales mensuelles', taxes],
          ['Assurance mensuelle', assurance],
          ['Charges mensuels',autres_charges],
          ['Total depenses mensuelles', totales_depenses]
        ],
        tableData2: [
          ['Revenus mensuels', Math.round(parseInt(this.state.sim_loyers)/12,2)],
          ['Autres revenus', Math.round(parseInt(this.state.sim_autres_revenus)/12,2)],
          ['Total revenus mensuels', totales_revenus]
        ],
        tableBenefice: [
          ['Bénéfice net mensuel:', benefice]
        ]
        
      })
      console.log(this.state)
    }
    
    render(){
        return(
            <View style={styles.content_container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.content_container}>
                        <Text style={styles.title_text}>Données de vente</Text>
                        <TextInput 
                        label='Adresse'
                        placeholder='Adresse' 
                        style={styles.title_input}
                        onChangeText={(addressText) => this._getAddress(addressText)}
                        />
                        <TextInput 
                        keyboardType="numeric"
                        label='Prix demandé' 
                        placeholder='Prix demandé'
                        style={styles.title_input} 
                        onChangeText={(prixDemandeText) => this._getPrixDemande(prixDemandeText)}
                        />
                        <TextInput 
                        keyboardType="numeric"
                        label='Prix proposé*' 
                        placeholder='Prix proposé*'
                        style={styles.title_input} 
                        onChangeText={(prixProposeText) => this._getPrixPropose(prixProposeText)}
                        />
                        <TextInput 
                        keyboardType="numeric"
                        label='Mise de fonds*'
                        placeholder='Mise de fonds*' 
                        style={styles.title_input} 
                        onChangeText={(miseDeFondText) => this._getMiseFond(miseDeFondText)}
                        />
                        <TextInput
                        keyboardType="numeric"
                        label='Revenus annuels*'
                        placeholder='Revenus annuels*'
                        style={styles.title_input}
                        onChangeText={(annuelRevenuText) => this._getAnnuelRevenu(annuelRevenuText)}
                        />
                        <TextInput 
                        keyboardType="numeric"
                        label='Autres revenus*'
                        placeholder='Autres revenus*' 
                        style={styles.title_input} 
                        onChangeText={(autresRevenusText) => this._getAutresRevenus(autresRevenusText)}
                        />
                        <TextInput 
                        keyboardType="numeric"
                        label='Taxes municipales*'
                        placeholder='Taxes municipales*' 
                        style={styles.title_input} 
                        onChangeText={(taxeMunText) => this._getTaxeMun(taxeMunText)}
                        />
                        <TextInput 
                        keyboardType="numeric"
                        label='Taxes scolaires*'
                        placeholder='Taxes scolaires*' style={styles.title_input}
                        onChangeText={(taxeScoText) => this._getTaxeScolaire(taxeScoText)}
                        />
                        
                        <TextInput 
                        keyboardType="numeric"
                        label='Assurance*'
                        placeholder='Assurance*' style={styles.title_input} 
                        onChangeText={(assuranceText) => this._getAssurance(assuranceText)}
                        />
                        <TextInput 
                        keyboardType="numeric"
                        label='Autres charges'
                        placeholder='Autres charges' 
                        style={styles.title_input} 
                        onChangeText={(autresChargesText) => this._getAutresCharges(autresChargesText)}
                        />
                        
                        <TextInput 
                        keyboardType="numeric"
                        label='Taux hypothécaire*'
                        placeholder='Taux hypothécaire*' 
                        style={styles.title_input} 
                        onChangeText={(tauxHypoText) => this._getTauxHypo(tauxHypoText)}
                        />
                        <TextInput 
                        keyboardType="numeric"
                        label='Amortissement (en années)*'
                        placeholder='Amortissement (en années)*' style={styles.title_input}
                        onChangeText={(amortissementText) => this._getAmortissement(amortissementText)}
                        />
                        <Button 
                        mode="contained"
                        title="Calculer" 
                        onPress={() => this.calculer()}>Calculer</Button>
                        </View>
                        <View style={styles.loading_container}>
                        <Text style={styles.title_text}>Résultats</Text>
                        <Table style={{margin:10}} borderStyle={{borderWidth: 5, borderColor: '#c8e1ff',margin:50}}>
                          <Rows data={this.state.tableBenefice} textStyle={styles.title_text}/>
                        </Table>
                        <Table style={{margin:10}} borderStyle={{borderWidth: 3, borderColor: '#c8e1ff',margin:50}}>
                          <Rows data={this.state.tableData1} textStyle={styles.vote_text}/>
                        </Table>
                        <Table style={{margin:10}} borderStyle={{borderWidth: 3, borderColor: '#c8e1ff',margin:50}}>
                          <Rows data={this.state.tableData2} textStyle={styles.vote_text}/>
                        </Table>
                        <Button 
                          mode="contained"
                          onPress={() => this.setState({ visible: true })}>Sauvegarder</Button>
                          <View style={styles.container}>
                            <Dialog 
                              style={styles.dialog_container}
                              visible={this.state.visible}
                              onTouchOutside={() => {
                              this.setState({ visible: false });
                              }}>
                                <Text>Donnez un nom a votre projet</Text>
                              <TextInput 
                                  label='Nom du projet'
                                  placeholder='Nom du projet' 
                                  style={styles.title_input} 
                                  onChangeText={(sim_nameText) => this._getSimName(sim_nameText)}
                                  />
                                  <Button 
                                  mode="contained"
                                  onPress={() => this.sauvegarder()}>Sauvegarder</Button>
                              
                            </Dialog>
                            </View>
                      </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
      width: 120,
      height: 180,
      margin: 5,
      backgroundColor: 'gray'
    },
    content_container: {
      flex: 1,
    },
    scrollView: {
        marginHorizontal: 2,
      },
    content_container1: {
        flex: 3,
    },
    content_container2: {
        flex: 3,
    },
    dialog_container:{
      height:0.25,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#307ecc',
      padding: 16,
    },
    content_container3: {
        flex: 3,
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
      paddingRight: 5,
      margin:10
    },
    title_input: {
        flex: 1,
        flexWrap: 'wrap',
        padding: 10,
        margin:20
    },
    vote_text: {
      fontWeight: 'bold',
      fontSize: 20,
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