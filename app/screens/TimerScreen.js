import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  FlatList

} from "react-native";
import { connect } from 'react-redux'

import { addTimer, getTimers } from "app/state/actions";
import colors from "../config/colors";
import CountDown from 'react-native-countdown-component';
import { Colors } from '../config/colors'

const DATA = [
  {
    id: '1',
    title: 'Wet your hands',
    subTilte: 'with clean running water(warm or cold)turn off the tap,and apply soap',
  },
  {
    id: '2',
    title: 'Lather your hands',
    subTilte: 'rub them togather with soap. Lather the backs of your hands, between your fingers,and under your nails',
  },
  {
    id: '3',
    title: 'scrub',
    subTilte: 'Scrub your hands for at least 20 seconds',
  },
  {
    id: '4',
    title: 'Rinse well',
    subTilte: 'Using running clean water'

  },
  {
    id: '5',
    title: 'Dry your hands',
    subTilte: 'Using a clean towel or air dry them'

  }

];

function Item({ id, title, subTitle, selected, onSelect }) {
  return (
    <TouchableOpacity style = {styles.ItemBase}>
      <View style={styles.container}>
        <View style={styles.itemImage}>
          <Text style={styles.ImageTitle}>{id}</Text>
        </View>
        <View  >
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
    </TouchableOpacity>


  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    getTimers: () => dispatch(getTimers()),
    addTimer: (payload) => dispatch(addTimer(payload)),
  };
};

class TimerScreen extends Component {
  static navigationOptions = {
    title: 'Timer',
    headerStyle: {
      backgroundColor: colors.green,
    },
    headerTintColor: colors.white,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };


  storeData = () => {
    var gsDayNames = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
    Alert.alert('Welldone! Yoy have cleaned your hand')
    const { addTimer } = this.props
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hr = new Date().getHours();
    var min = new Date().getMinutes();
    let current = new Date();
    let dayName = current.toLocaleDateString('en-US', { weekday: 'long' });
    var finalDateString =
      dayName + ",  " + hr + ":" + min + " " + date + "/" + month + "/" + year;
    addTimer(finalDateString)
  };

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.timerScreen}>


          <CountDown
            until={5}
            size={50}
            onFinish={() => {
              this.storeData()

            }}
            digitStyle={{ backgroundColor: colors.skyblue }}
            digitTxtStyle={{ color: colors.white }}
            timeLabelStyle={{ color: colors.green }}

            timeToShow={['S']}
            timeLabels={{ s: 'Seconds' }}
          />
        </View>
        <View >
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <Item
                id={item.id}
                title={item.title}
                subTitle={item.subTilte}
              />

            )
            }
            keyExtractor={item => item.id}

          />
        </View>


      </View>
    );
  }
}

const options = {
  container: {
    backgroundColor: "#00d2ff",
    padding: 5,
    borderRadius: 5,
    width: 220,
  },
  text: {
    fontSize: 30,
    color: "#FFF",
    marginLeft: 7,
  },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,

  },
  timerScreen: {
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  topContainer: {
    backgroundColor: "#00d2ff",
    padding: 5,
    borderRadius: 5,
    height: 150,
    width: 150,
    borderRadius: 150 / 2
  },
  topText: {
    fontSize: 15,
    color: "#FFF",
    textAlign: 'center',
    margin: 30,
    fontWeight: "bold"
  },
  container: {
    flexDirection: 'row',
    paddingLeft: 20

  },
  item: {
    backgroundColor: colors.White,
    padding: 40,
    marginVertical: 8,

  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 10,

    color: colors.gray
  },
  subTitle: {
    fontSize: 10,
    width: 300,
    paddingLeft: 10,
    fontWeight: 'bold',
    color: colors.lightGray

  },
  itemImage: {
    backgroundColor: colors.green,

    width: 20,
    height: 20,

  },
  ImageTitle: {
    textAlign: 'center',
    color: colors.white
  },
  ItemBase:{
    paddingTop:20
  }


});

export default connect(null, mapDispatchToProps)(TimerScreen)