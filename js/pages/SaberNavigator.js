'use strict';
import React, {PropTypes} from 'react';
import { Navigator } from 'react-native';

class SaberNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navigator
        configScene={(route) => {
          return Navigator.SceneConfigs.FloatFromBottom
        }}
        initialRoute={{}}
        renderScene={this.renderScene}
        />
    );
  }

  renderScene(route, navigator){
    return null;
  }
}

SaberNavigator.propTypes = {
};

export default SaberNavigator;
