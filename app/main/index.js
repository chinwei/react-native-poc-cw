import React, { Component } from 'react'

import {
   NavigationExperimental
} from 'react-native'

import CompaniesView from '../companies'
import FilterView from '../filter'

const {
 CardStack: NavigationCardStack,
 StateUtils: NavigationStateUtils
} = NavigationExperimental

function createReducer(initialState) {
  return (currentState = initialState, action) => {
    switch (action.type) {
      case 'push':
        return NavigationStateUtils.push(currentState, {key: action.key});
      case 'pop':
        return currentState.index > 0 ?
          NavigationStateUtils.pop(currentState) :
            currentState;
          default:
            return currentState;
      }
   }
}
const NavReducer = createReducer({
  index: 0,
  key: 'App',
  routes: [{key: 'Companies'}]
})

export default class MainView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navState: NavReducer(undefined, {})
    }
  }

  _handleAction (action) {
      const newState = NavReducer(this.state.navState, action);
      if (newState === this.state.navState) {
        return false;
      }
      this.setState({
        navState: newState
      })
      return true;
   }

  handleBackAction() {
     return this._handleAction({ type: 'pop' });
   }

  _onPress() {
    this.refs.nav.push({
      title: 'Add Items',
      component: FilterView,
      rightButtonTitle: 'Apply'

    })
  }

  _renderRoute (key) {
    if (key === 'Companies') {
      return (
        <CompaniesView />
      );
    }
    // if (key === 'About') {
    //   return <About
    //           goBack={this.handleBackAction.bind(this)}
    //           onPress={this._handleAction.bind(this,
    //           { type: 'push', key: 'Contact' })} />
    // }
    // if (key === 'Contact') {
    //   return <Contact
    //            goBack={ this.handleBackAction.bind(this)} />
    // }
  }

  _renderScene(props) {
      const ComponentToRender = this._renderRoute(props.scene.route.key)

      return ComponentToRender
  }

  render() {
    return (
      <NavigationCardStack
        navigationState={this.state.navState}
        onNavigate={this._handleAction.bind(this)}
        renderScene={this._renderScene.bind(this)} />
    )
  }
}
