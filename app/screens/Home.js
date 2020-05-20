import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
  Button,
} from "react-native";

import HistoryScreen from './HistoryScreen'
import colors from "../config/colors";



export default class Home extends Component {
  static navigationOptions = {
   
    title: 'Home',
    headerStyle: {
      backgroundColor: colors.green,
    },
    headerTintColor: colors.white,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerLeft: () => (
      <Button
      onPress={() => alert('Settings is pending')}
        title="Settings"
        color= {colors.white}
      />
    ),
  };
  render() {

    return (
      <View style={styles.screen}>
        <TouchableHighlight
          style={styles.topContainer}
          onPress={() => this.props.navigation.navigate('Timer')}
        >
          <Text style={styles.topText}>
            Wash
          </Text>
        </TouchableHighlight>
        <View style={styles.historyText}>
          
          <Text>History </Text>
        </View>
        <View style={styles.listLayout}>

          <HistoryScreen />
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    justifyContent: "space-between",
    padding: 10,
    
  },
  topContainer: {
    backgroundColor: colors.skyblue,
    alignSelf:'center',
    padding: 5,
    borderRadius: 5,
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,

  },
  topText: {
    fontSize: 24,
    color: colors.white,
    textAlign: 'center',
    margin: 30,
    fontWeight: "bold"
  },
  historyText: {
 
    padding: 10,
    fontSize: 50,


  },
  listLayout: {
    flex: 2,
    padding: 10


  }
});
