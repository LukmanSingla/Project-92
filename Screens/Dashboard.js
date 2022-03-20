import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

var hw = require("../localdb.json");
export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      homework: [],
    };
  }
  renderItem = ({ item }) => {
    return (
      <View style={styles.hwCard}>
        <View style={styles.dates}>
          <View style={styles.dateGiven}>Assigned : {item.dateGiven}</View>
          <View style={styles.submitDate}>Deadline : {item.submitDate}</View>
        </View>
      </View>
    );
  };
  keyExtractor = (item, index) => {
    index.toString();
  };
  // componentDidMount() {
  //   this.setState({
  //     homework: hw,
  //   });
  // }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>WorkTracker</Text>
        </View>
        <View>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={hw}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 0.2,
    alignItems: "center",
  },
  title: {
    textAlign: "center",
  },
  dateGiven: {
    flex: 0.5,
  },
  submitDate: {
    flex: 0.5,
  },
  dates: {
    flexDirection: "row",
    flex: 0.3,
  },
  hwCard: {
    borderRadius: 20,
  },
});
