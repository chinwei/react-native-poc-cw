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
         ]),
         loginStatus:'Logging in...'
       };

    var loginHelper = require('../login_example.js');

    loginHelper.login()
      .then(function () {
        handleLoginResponse('I am Logged In!');
      })
      .catch(function () {
        handleLoginResponse('I FAILED to logged In :(');
      });

    var THIS = this;

    function handleLoginResponse (resp) {
      THIS.setState( { loginStatus: resp });
    }
  }

  componentDidMount() {
   var listViewScrollView = this.refs.listView.getScrollResponder();
     listViewScrollView.scrollTo(1); // Hack to get ListView to render fully
   }

  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.infoBar, styles.flexCenter, styles.borderBottomLight]}>
          <Text style={{color: '#9B9B9B', fontSize: 12}}>{this.state.loginStatus}</Text>
        </View>
        <View style={{
            backgroundColor: 'white',
            height: 50,
            borderBottomWidth: 1,
            borderBottomColor: '#eee'
          }}>
          <TextInput
            placeholder= "Search"
            style={styles.textInput}/>

        </View>
        <View style={[styles.infoBar, styles.flexCenter, styles.borderBottomLight]}>
          <Text style={{color: '#9B9B9B', fontSize: 12, fontWeight: '500', paddingRight: 3}}>654356</Text>
          <Text style={{color: '#9B9B9B', fontSize: 12}}>Companies found (0.02 seconds)</Text>
        </View>
        <ListView style={{zIndex: 1}}
        automaticallyAdjustContentInsets={false}
       ref='listView'
       dataSource={this.state.dataSource}
       renderRow={(rowData) =>
         <View style={[styles.listViewContainer, styles.flexCenter, styles.borderBottomLight]}>
           <View style={{flex: 1}}>
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

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 64
  },
  listViewContainer: {
    height: 65,
    paddingLeft: 20,
    flexDirection: 'row',
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoBar: {
    backgroundColor: 'white',
    height: 40,
    flexDirection: 'row',
  },
  borderBottomLight: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  textInput: {
    flex: 1,
    height: 49,
    paddingLeft: 20,
    backgroundColor: 'white',
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingRight: 3
  }

});
