import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-material-ui';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

import config from '../config';

export default class ReportForm extends Component {

  state = {
    title: ''
  }

  onSubmit = () => {
    const {title} = this.state
    navigator.geolocation.getCurrentPosition((position) => {
      this.sendReport({
        title,
        time: new Date().toISOString(),
        position: {
          lat: position.coords.latitude,
          long: position.coords.longitude
        }
      })
    }, (error) => {
      alert('Please enable and accept')
    })
  }

  async sendReport(report) {
    const response = await fetch(`${config.URL}report`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(report)
    })
    const data = await response.json();
    this.setState({title: ''})
  }

  render() {
    let {title} = this.state;

    return (
      <View style={{marginTop: 50}}>
        <Text style={{textAlign: 'center'}}>Report Form</Text>
        <Form style={{marginRight: 15, marginTop: 10}}>
            <Item floatingLabel>
              <Label>Title</Label>
              <Input 
                value={title}
                onChangeText={(title) => this.setState({title})}/>
            </Item>
        </Form>
        <View style={{marginTop: 20, marginLeft: 15, marginRight: 15}}>
        <Button raised primary text="Send Report" style={{marginLeft: 20}} onPress={this.onSubmit}/>
        </View>
      </View>
    )
  }

}