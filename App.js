import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  View
} from "react-native";
import Pie from "./js/charts/Pie";
import Theme from "./js/theme";
import Slider from "react-native-slider";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      collectionsTFI: [
        { number: 40, name: "Baahubali" },
        { number: 35, name: "Srimanthudu" },
        { number: 25, name: "Rangasthalam" }
      ],
      value: 0
    };
  }

  _onPieItemSelected = newIndex => {
    this.setState({
      ...this.state,
      activeIndex: newIndex
    });
  };

  render() {
    const height = 200;
    const width = 500;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Pie
            pieWidth={150}
            pieHeight={150}
            onItemSelected={this._onPieItemSelected}
            colors={Theme.colors}
            width={width}
            height={height}
            data={this.state.collectionsTFI}
          />
          <Text style={styles.chart_title}>TFI Collections</Text>
        </View>
        <Slider
          value={this.state.value}
          onValueChange={value => this.setState({ value })}
          minimumValue={0}
          maximumValue={33}
          step={5}
        />
        <Text>Value: {this.state.value}</Text>
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    backgroundColor: "whitesmoke",
    marginTop: 21
  },
  chart_title: {
    paddingTop: 15,
    textAlign: "center",
    paddingBottom: 5,
    paddingLeft: 5,
    fontSize: 18,
    backgroundColor: "white",
    color: "grey",
    fontWeight: "bold"
  }
};
