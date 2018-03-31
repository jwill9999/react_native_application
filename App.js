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
  /*
  * This method watches for changes to the text field
  * and resets state therefore re rendering the view.  
  */
  onChangeText = value => {
    this.setState({
      textValue: value
    });
  };

  /* Method to delete an item from the places array
  *  by tapping on the list item. This filters the 
  *  array and returns a new arry minus that list item 
  */
  deletePlace = index => {
    this.setState(prevState => ({
      places: prevState.places.filter((place, i) => i !== index)
    }));
  };
  /*
  * On button press check if returned string is empty. If
  * not then concatinate onto places array new value and 
  * reset input field to empty string
  */
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
        <PlaceList places={places} onItemDelete={this.deletePlace} />
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
