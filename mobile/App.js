/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 *

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Icon from "react-native-vector-icons/FontAwesome5";


const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" backgroundColor="#0033AA" />
      <SafeAreaView style={{
        justifyContent: "center",
        alignItems:  "center",
        flex:1,
        backgroundColor: "#0033AA"
      }}>
        <Text style={{
            fontSize: 56,
            color: "white"
          }}>
          UNDERLIE
        </Text>
        <View>
          <TextInput 
            style={{
              backgroundColor: "white",
              paddingLeft: 48,
              paddingRight: 48,
              borderBottomLeftRadius: 100,
              borderTopLeftRadius: 100,
              fontSize: 16
            }}
            placeholder={"Type here to find the truth..."}
            placeholderTextColor={"#959595"}/>
          <View>
            <Icon name="question" size={22} color="#FFFFFF" />
            <Icon name="search" size={22} color="#FFFFFF" />
            <Icon name="spider" size={22} color="#FFFFFF" />
          </View>  
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
*/

export default from './storybook';