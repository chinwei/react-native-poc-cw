/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import React, { Component } from 'react'

 import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   TouchableHighlight,
   ScrollView,
   TextInput,
   NavigatorIOS,
   ListView,
   NavigationExperimental
 } from 'react-native'



 class reactnativePOC extends Component {
   constructor(props) {
     super(props)

   }

   onPress() {
     this.refs.nav.push({
       title: 'Add Items',
       component: FilterView,
       rightButtonTitle: 'Apply'

     })
   }


   render() {
     return (
       <NavigatorIOS
         ref='nav'
        style={{flex: 1, backgroundColor: 'white'}}
        initialRoute={{
          title: 'Companies',
          component: Companies,
          rightButtonTitle: 'Filter',
          onRightButtonPress: () => this.onPress(),
        }} />
     )
   }
 }


 class Companies extends Component {
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


class FilterView extends Component {
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


AppRegistry.registerComponent('reactnativePOC', () => reactnativePOC);
