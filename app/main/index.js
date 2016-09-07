import React, { Component } from 'react'

import {
   NavigatorIOS,
   NavigationExperimental
} from 'react-native'

import CompaniesView from '../companies'
import FilterView from '../filter'

export default class MainView extends Component {
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
