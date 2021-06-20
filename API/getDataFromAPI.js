import React, { Component } from 'react';
import { StyleSheet, View, Text,Alert } from 'react-native';
const API_SECRET = "14a3ffd7cc411a829a936b823f64f71c";

export function getTokenBySecret() {
    const url = 'http://simulhypotest.perfmindset.com/Simul/public/api/get-token'
    return fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    secret: API_SECRET
                })
            }).then(res => res.json())
                .then((responseJson) => responseJson)
            .catch(error => console.error('get Token Error:', error))
  }

  export function getSimulationList(token) {
    const url = 'http://simulhypotest.perfmindset.com/Simul/public/api/simulation'
    return fetch(url, {
        method: "GET",
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
      .then((response) => response.json())
      .catch((error) => console.error('get list Error:',error))
  }

  export function ajouterSimulation(user_id,sim_name,sim_hypotheque,sim_loyers,sim_misefond,
    sim_revenus,sim_taxe_mun,sim_assurance, sim_autres_charges,sim_totales_depenses,
    sim_autres_revenus,sim_taxe_sco,address,sim_asking_price,sim_benefice) {

      const url = 'http://simulhypotest.perfmindset.com/Simul/public/api/simulationadd'
    fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + '1WGGIrhddXByFXa0'
                },
                body: JSON.stringify({
                    user_id: user_id,
                    sim_name: sim_name,
                    sim_hypotheque: sim_hypotheque,
                    sim_loyers: sim_loyers,
                    sim_misefond: sim_misefond,
                    sim_revenus: sim_revenus,
                    sim_deleted: '2021-01-01 00:00:00',
                    sim_taxe_mun: sim_taxe_mun,
                    sim_assurance: sim_assurance,
                    sim_autres_charges: sim_autres_charges,
                    sim_totales_depenses: sim_totales_depenses,
                    sim_autres_revenus: sim_autres_revenus,
                    sim_status: 1,
                    sim_depreciation:0,
                    sim_morgate_rate:'0.00',
                    sim_address:address,
                    sim_asking_price:sim_asking_price,
                    sim_benefice:sim_benefice,
                    sim_taxe_sco: sim_taxe_sco,
                })
            }).then(res => res.json())
                .then((responseJson) => {
                    //Alert.alert(JSON.stringify(responseJson))
                    console.log(responseJson);
                })
            .catch(error => console.error('add simulation Error:', error))
  }

  export function getDetailSimulation(id) {
    const url = 'http://simulhypotest.perfmindset.com/Simul/public/api/simuldetail?id='+id
    return fetch(url, {
        method: "GET",
        headers: {
          'Authorization': 'Bearer ' + '1WGGIrhddXByFXa0'
        }
      })
      .then((response) => response.json())
      .catch((error) => console.error('get details Error:',error))
  }