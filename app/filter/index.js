import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  TextInput
} from 'react-native'

export default class FilterView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}
        style={{backgroundColor: 'white', flex: 1, paddingTop: 64}}>
        <View style={{flexDirection: 'row', flex: 1, borderBottomWidth: 1,borderBottomColor: '#eee'}}>
          <View style={{padding: 20, height: 70, flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <Text style={{fontSize: 16, fontWeight: '300'}}>Activity</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', flex: 1, borderBottomWidth: 1,borderBottomColor: '#eee'}}>
          <View style={{padding: 20, height: 70, flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <Text style={{fontSize: 16, fontWeight: '300'}}>Founded Before</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', flex: 1, borderBottomWidth: 1,borderBottomColor: '#eee'}}>
          <View style={{padding: 20, height: 70, flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <Text style={{fontSize: 16, fontWeight: '300'}}>Founded After</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', flex: 1, borderBottomWidth: 1,borderBottomColor: '#eee'}}>
          <View style={{padding: 20, height: 70, flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <Text style={{fontSize: 16, fontWeight: '300'}}>Social Capital</Text>
          </View>
        </View>

      </ScrollView>
    )
  }
}
