'use strict';
import {StatusBar, View, StyleSheet, Navigator} from 'react-native';
import React, {PropTypes} from 'react';
import LoginScreen from './login/LoginScreen';

class SaberApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.isLoggedIn){
      return <LoginScreen />;
    }
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="default"/>
        
      </View>
    );
  }
}

SaberApp.propTypes = {};

let styles = StyleSheet.create({
  container:{
    flex: 1
  }
});

export default SaberApp;
