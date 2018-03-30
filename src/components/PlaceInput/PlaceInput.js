import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const PlaceInput = props => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      value={props.textValue}
      onChangeText={props.onChangeText}
      placeholder="Add Your Text"
    />
    <Button style={styles.button} title="Add" onPress={props.onButtonPress} />
  </View>
);

const styles = StyleSheet.create({
  input: {
    width: "70%",
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#1a75ff"
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  button: {
    width: "30%"
  }
});

export default PlaceInput;
