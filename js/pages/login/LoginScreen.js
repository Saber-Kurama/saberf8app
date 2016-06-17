'use strict';
import React, {PropTypes} from 'react';
import { Image, StyleSheet, TouchableOpacity,
    Animated, View, Text, StatusBar, Dimensions} from 'react-native';
import SaberColors from 'SaberColors';
import { connect } from 'react-redux';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    StatusBar && StatusBar.setBarStyle('default');
    Animated.timing(this.state.anim, {toValue: 3000, duration: 3000}).start();
  }

  render() {
    return (
      <Image style={styles.container}
          source={require('./img/login-background.png')}>
          <TouchableOpacity
            accessibilityLabel="Skip login"
            accessibilityTraits="button"
            style={styles.skip}
            onPress={() => this.props.dispatch(skipLogin())}>
            <Animated.Image
              style={this.fadeIn(2800)}
              source={require('./img/x.png')}
            />
          </TouchableOpacity>
        <View style={styles.section}>
          <Animated.Image
            style={this.fadeIn(0)}
            source={require('./img/devconf-logo.png')}>
          </Animated.Image>
        </View>
        <View style={styles.section}>
          <Animated.Text style={[styles.h1, this.fadeIn(700, -20)]}>
            code to
          </Animated.Text>
          <Animated.Text style={[styles.h1, {marginTop: -30}, this.fadeIn(700, 20)]}>
            connect
          </Animated.Text>
          <Animated.Text style={[styles.h2, this.fadeIn(1000, 10)]}>
            April 12 + 13 / Fort Mason Center
          </Animated.Text>
          <Animated.Text style={[styles.h3, this.fadeIn(1200, 10)]}>
            SAN FRANCISCO, CALIFORNIA
          </Animated.Text>
        </View>
        <Animated.View style={[styles.section, styles.last, this.fadeIn(2500, 20)]}>
          <Text style={styles.loginComment}>
            Use Facebook to find your friends at F8.
          </Text>
        </Animated.View>
      </Image>
    );
  }

  fadeIn(delay, from=0){
    const { anim } = this.state;
    return {
      opacity: anim.interpolate({
        inputRange: [delay, Math.min(delay + 500, 3000)],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
      transform: [{
        translateY: anim.interpolate({
          inputRange: [delay, Math.min(delay + 500, 3000)],
          outputRange: [from, 0],
          extrapolate: 'clamp'
        }),
      }]
    }
  }
}

LoginScreen.propTypes = {
};

const scale = Dimensions.get('window').width / 375;

let styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'transparent',
    padding: 26,
    width: undefined,
    height: undefined
  },
  section:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  last: {
    justifyContent: 'flex-end'
  },
  h1: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: Math.round(74 * scale),
    color: SaberColors.darkText,
    backgroundColor: 'transparent',
  },
  h2: {
    textAlign: 'center',
    fontSize: 17,
    color: SaberColors.darkText,
    marginVertical: 20,
  },
  h3: {
    fontSize: 12,
    textAlign: 'center',
    color: SaberColors.lightText,
    letterSpacing: 1,
  },
  loginComment: {
    marginBottom: 14,
    fontSize: 12,
    color: SaberColors.darkText,
    textAlign: 'center',
  },
  skip: {
    position: 'absolute',
    right: 0,
    top: 20,
    padding: 15,
  }
});
// export default LoginScreen;
export default connect()(LoginScreen);
