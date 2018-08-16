import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Dimensions} from 'react-native';

import {NativeModules} from 'react-native';
var CalendarManager = NativeModules.CalendarManager;
console.log("TEST" + CalendarManager)
console.dir(CalendarManager);
CalendarManager.addEvent('One', 'Two', 3);
console.log("Anything")

const SampleView = require('./SampleView.js');

class RNHighScores extends Component {
  render() {
    var contents = this.props['scores'].map((score) => (
      <Text key={score.name}>
        {score.name}:{score.value}
        {'\n'}
      </Text>
    ));
    return (
      <View style={styles.container}>
        <Text style={styles.highScoresTitle}>2048 High Scores!</Text>
        <Text style={styles.scores}>{contents}</Text>
      </View>
    );
  }
}

class VATCalculator extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.highScoresTitle}>VAT Calcultor</Text>
        <TextInput 
        style={styles.textInput}  
        placeholder='Enter price'
        placeholderTextColor='gray'
        ref={input => this._price= input} 
        /> 
        <Button title={'Calculate'}/>
      </View>
    );
  }
}

class Login extends Component {
  constructor() {
    super()
    this.onClickNext = this.onClickNext.bind(this)
  }

  onClickNext() {
    //Printer.printJS("HELLO WORLD")
  }

  render() {
    return (

      //<View style={styles.backgroundView}></View>

      /*
        <ImageBackground source={...} style={{width: '100%', height: '100%'}}>
    <Text>Inside</Text>
  </ImageBackground>
  https://facebook.github.io/react-native/docs/images.html#background-image-via-nesting
      */ 
      <View style={styles.container}>
        <View style={styles.mainView}>
          <View style={styles.logoImageView}></View> 
          <Text style={styles.highScoresTitle}>Enter your national ID</Text>
          <TextInput 
          style={styles.textInput}  
          placeholder='Enter ID'
          placeholderTextColor='gray'
          ref={input => this._price= input} 
          /> 
          <TouchableOpacity style={styles.nextButton} 
          onPress={this.onClickNext}>
            <Text style={styles.nextButtonText}>NEXT</Text>
          </TouchableOpacity>
          <SampleView/>
        </View>
        <View style={styles.bottomView}>
          <View style={styles.bottomViewLeft}>
            <Text style={styles.bottomViewText}>Powered by</Text>
            <View style={styles.companyLogoImageView}></View>  
          </View>
          <View style={styles.bottomViewRight}>
            <Text style={styles.bottomViewText} >Need help?</Text>
            <TouchableOpacity>
              <Text>Contact us</Text> 
            </TouchableOpacity>
          </View>
        </View> 
      </View>
/*          
          */
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
  },

  backgroundView: {
    height: 500,
    width: 500,
    backgroundColor: 'white',
    //zIndex: 2
  },

  mainView: {
    height: 250, 
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff', 
    marginTop: 350,
    marginRight: 10, 
    marginLeft: 10,
    alignSelf: 'stretch',
    //zIndex: 20
  }, 

  bottomView: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 30,
    //zIndex: 20
  },

  bottomViewLeft: {
    flex: 1,
    flexDirection: 'row',
  },

  bottomViewRight: {
    flex: 1,
    flexDirection: 'row',
  },

  bottomViewText: {
    marginRight: 5, 
  },

  logoImageView: {
    height: 50, 
    width: 200,
    marginLeft: 20,
    marginTop: 20,
    backgroundColor: 'gray' 
  }, 

  companyLogoImageView: {
    height: 25, 
    width: 65,
    backgroundColor: 'gray' 
  }, 

  highScoresTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  scores: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  text: {
    fontSize: 20
  },

  textInput: {
    height: 40,
    borderBottomColor: 'gray', 
    borderBottomWidth: 1,
    fontSize: 20,
    marginTop: 20,
    alignSelf: 'stretch',
    marginRight: 10, 
    marginLeft: 10 
  }, 

  nextButton: {
    height: 'auto',
    width: Dimensions.get('window').width - 20,
    backgroundColor: 'orange',
    color: 'black',
    position: 'absolute',
    bottom: 0, 
    borderWidth: 1,
    borderColor: 'orange',
    borderBottomLeftRadius: 10, 
    borderBottomRightRadius: 10
    //marginLeft: 111
  },

  nextButtonText: {
    width: 'auto',
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
    alignSelf: 'stretch',
  }
});

// Module name
AppRegistry.registerComponent('RNHighScores', () => RNHighScores);
AppRegistry.registerComponent('VATCalculator', () => VATCalculator);
AppRegistry.registerComponent('Login', () => Login);
//console.dir(React.NativeModules.CalendarManager);