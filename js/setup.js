/*
 * @flow
 */
'use strict';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import SaberApp from './pages/SaberApp';
let setup = () : ReactClass => {
  class Root extends Component {
    constructor() {
      super();
      this.state = {
        isLoading: true,
        store: configureStore(() => this.setState({isLoading: false})),
      };
    }
    render() {
      if(this.state.isLoading){
        return null;
      }
      return (
        <Provider store={this.state.store}>
          <SaberApp />
        </Provider>
      );
    }
  }
  return Root;
};
export default setup;
