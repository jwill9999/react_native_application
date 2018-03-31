import React from "react";
import { FlatList, StyleSheet } from "react-native";

import { ListItem } from "../../index";

const PlaceList = props => {
  console.log(props);
  return (
    <FlatList
      style={styles.listItem}
      data={props.places}
      renderItem={({ item }) => (
        <ListItem
          places={item.value}
          onItemPress={() => props.onItemDelete(item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: "100%"
  }
});

export default PlaceList;
