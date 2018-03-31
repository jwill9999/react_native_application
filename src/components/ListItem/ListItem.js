import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ListItem = props => {
  return (
    <TouchableOpacity style={styles.listItem} onPress={props.onItemPress}>
      <View>
        <Text>{props.places}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    marginBottom: 5,
    marginTop: 25,
    shadowColor: "#C9C9C9",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.75
  }
});

export default ListItem;
