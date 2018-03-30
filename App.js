import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import ListItem from "./src/ListItem/ListItem";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: "",
      places: ["Sleaford", "Grantham", "Lincoln"]
    };
  }
  
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
    const placeList = places.map(place => (
      <ListItem key={place} places={place} onItemPress={() => alert(place)} />
    ));

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={textValue}
            onChangeText={value =>
              this.setState({
                textValue: value
              })
            }
            placeholder="Add Your Text"
          />
          <Button
            style={styles.button}
            title="Add"
            onPress={this.buttonPress}
          />
        </View>
        {placeList}
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
  },
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
