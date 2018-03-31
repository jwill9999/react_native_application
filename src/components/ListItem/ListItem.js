import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const ListItem = props => {
  console.log(props.image);
  return (
    <TouchableOpacity style={styles.listItem} onPress={props.onItemPress}>
      <View style={styles.view}>
        <Image source={props.image} style={styles.image} resizeMode="contain" />
        <Text>{props.places}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
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
  },
  image: {
    marginRight: 20,
    height: 50,
    width: 50
  },
  view: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default ListItem;
