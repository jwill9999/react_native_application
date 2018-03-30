import React from "react";
import { StyleSheet, View } from "react-native";

import { PlaceList, PlaceInput } from "./src/index";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: "",
      places: ["Sleaford", "Grantham", "Lincoln"]
    };
  }

  onChangeText = value => {
    this.setState({
      textValue: value
    });
  };

  buttonPress = () => {
    if (this.state.textValue.trim() === "") {
      return;
    }
    this.setState(prevState => ({
      places: prevState.places.concat(prevState.textValue),
      textValue: ""
    }));
  };

  render() {
    const { places, textValue } = this.state;

    return (
      <View style={styles.container}>
        <PlaceInput
          textValue={textValue}
          onChangeText={this.onChangeText}
          onButtonPress={this.buttonPress}
        />
        <PlaceList places={places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 36,
    backgroundColor: "#f8f6f6",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
