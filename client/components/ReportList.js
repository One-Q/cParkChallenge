import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';

import config from '../config';

export default class ReportList extends Component {

  state = {
    reports: []
  }

  componentDidMount() {
    this.load();
  }

  componentWillReceiveProps() {
    this.load();
  }

  load() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.getList(position.coords.latitude, position.coords.longitude)
    }, (error) => {
      alert('Please enable and accept')
    })
  }

  getList = async (lat, long) => {
    try{
      const response = await fetch(`${config.URL}report/${lat}/${long}`);
      const data = await response.json();
      this.setState({ reports: data.reports });
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    const {reports} = this.state;
    let content = <Text style={{textAlign: 'center'}}>Empty</Text>

    if(reports.length > 0) {
      content = reports.map((report, i) => (
        <Card
          key={report._id}
          title={report.title}
        >
          <Text>Latitude: {report.position.coordinates[1]}</Text>
          <Text>Longitude: {report.position.coordinates[0]}</Text>
        </Card>
      ))
           
    }

    return (
      <View style={{marginTop: 50}}>
        <NavigationEvents
          onWillFocus={this.load()}
        />
        <Text style={{textAlign: 'center'}}>Report List</Text>
        <ScrollView style={{marginBottom: 25}}>{content}</ScrollView>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'red'
  }
});