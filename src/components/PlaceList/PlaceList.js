import React from "react";
import { View, StyleSheet } from "react-native";

import { ListItem } from "../../index";

const PlaceList = props => {
  const placeList = props.places.map(place => (
    <ListItem key={place} places={place} onItemPress={() => alert(place)} />
  ));
  return <View style={styles.listItem}>{placeList}</View>;
};

const styles = StyleSheet.create({
  listItem: {
    width: "100%"
  }
});

export default PlaceList;
