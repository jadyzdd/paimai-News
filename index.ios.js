/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  NavigatorIOS,
} = React;

var _navigator;

var TimerMixin = require('react-timer-mixin');

var {MainScreen} = require('./src/MainScreen.js');
var {StoryScreen} = require('./src/StoryScreen.js');

var AwesomeProject = React.createClass({
  
  mixins: [TimerMixin],

  getInitialState: function() {
    return {
      splashed: true,
    };
  },

  componentDidMount: function() {
    this.setTimeout(
      () => {
        this.setState({splashed: true});
      },
      2000,
    );
  },

  RouteMapper: function(route, navigationOperations, onComponentRef) {
    _navigator = navigationOperations;

    if (route.name === 'home') {
      return (
        <View style={styles.container}>
          <MainScreen />
        </View>
      );
    } else if (route.name === 'story') {
      return (
        <View style={styles.container}>
          <StoryScreen />
        </View>
      );
    }
  },


  render: function() {

    if (this.state.splashed) {
      var initialRoute = {name: 'home'};
      return (
        // <NavigatorIOS
        //   style={styles.container}
        //   initialRoute={{
        //     title: '首页',
        //     component: MainScreen,
        //   }}
        // />
        <Navigator
          style={styles.container}
          initialRoute={initialRoute}
          configureScene={() => Navigator.SceneConfigs.FadeAndroid}
          renderScene={this.RouteMapper}/>
      );
      // return (
      //   <View style={styles.container}>
      //     <MainScreen />
      //   </View>
      // );
    } else {
      return (
        <StoryScreen />
      );
    }
    
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
