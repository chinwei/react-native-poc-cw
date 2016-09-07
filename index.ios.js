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

import CompaniesView from './app/companies'
import FilterView from './app/filter'

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
         component: CompaniesView,
         rightButtonTitle: 'Filter',
         onRightButtonPress: () => this.onPress()
      }} />
   )
 }
}

AppRegistry.registerComponent('reactnativePOC', () => reactnativePOC);
