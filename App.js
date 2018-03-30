import React from "react";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", placeName: [] };
  }
  buttonPress = () => {
    if (this.state.text.trim() === "") {
      return;
    }
    this.setState(prevState => ({
      placeName: prevState.placeName.concat(prevState.text),
      text: ""
    }));
  };

  render() {
    const places = this.state.placeName.map(place => (
      <Text key={place}>{place}</Text>
    ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            placeholder="Add Your Text"
          />
          <Button
            style={styles.button}
            title="Add"
            onPress={this.buttonPress}
          />
        </View>
        <View>{places}</View>
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
    height: 40
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
