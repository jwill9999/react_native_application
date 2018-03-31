import React from "react";
import { View, StyleSheet } from "react-native";

import { ListItem } from "../../index";

const PlaceList = props => {
  const placeList = props.places.map((place, i) => (
    <ListItem
      key={place}
      places={place}
      onItemPress={() => props.onItemDelete(i)}
    />
  ));
  return <View style={styles.listItem}>{placeList}</View>;
};

const styles = StyleSheet.create({
  listItem: {
    width: "100%"
  }
});

export default PlaceList;
