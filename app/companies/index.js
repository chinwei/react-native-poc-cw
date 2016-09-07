import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ListView
} from 'react-native'

export default class CompaniesView extends Component {
  constructor(props) {
    super(props);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.state = {
         dataSource: ds.cloneWithRows(
           [
           'BANCO DO BRASIL SA',
           'BANCO DO BRASIL SA',
           'BANCO DO BRASIL SA',
           'BANCO DO BRASIL SA',
           'BANCO DO BRASIL SA',
           'BANCO DO BRASIL SA',
           'BANCO DO BRASIL SA'
         ])
       }
  }

  componentDidMount() {
   var listViewScrollView = this.refs.listView.getScrollResponder();
     listViewScrollView.scrollTo(1); // Hack to get ListView to render fully
   }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white', paddingTop: 64}}>
        <View style={{
            backgroundColor: 'white',
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#eee'}}>
          <TextInput
            placeholder= "Search"
            style={{
              color: '#333',
              flex: 1,
              height: 49,
              paddingLeft: 20,
              backgroundColor: 'white',
              fontSize: 16,
              fontWeight: '500',
              borderBottomWidth: 1,
              borderBottomColor: '#eee',
              paddingRight: 3}}/>
        </View>
        <View style={{
            backgroundColor: 'white',
            height: 40,
            justifyContent: 'center',
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: '#eee',
            alignItems: 'center'}}>
          <Text style={{color: '#9B9B9B', fontSize: 12, fontWeight: '500', paddingRight: 3}}>654356</Text>
          <Text style={{color: '#9B9B9B', fontSize: 12}}>Companies found (0.02 seconds)</Text>
        </View>
        <ListView style={{zIndex: 1}}
        automaticallyAdjustContentInsets={false}
       ref='listView'
       dataSource={this.state.dataSource}
       renderRow={(rowData) =>
         <View style={{
             height: 65,
             paddingLeft: 20,
             flexDirection: 'row',
             alignItems: 'center',
             borderBottomWidth: 1,
             borderBottomColor: '#eee'
           }}>
           <View style={{flexDirection: 'row', flex: 1}}>
             <View style={{paddingLeft: 5, height: 50, flexDirection: 'row', alignItems: 'center', flex: 1}}>
               <Text style={{fontSize: 16, fontWeight: '300'}}>{rowData}</Text>
             </View>
           </View>
         </View>
       }
     />

      </View>
    )
  }
}
