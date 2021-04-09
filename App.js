import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Header } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import PhonicSoundBtn from './Phonicbtn';
import db from "./localDb";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      word: " ",
      chunks: [],
      displayText: "",
      phonicSound: [],
    };
  }

  showChunk = async () => {
    // var a = this.state.word
    // this.setState({
    // displayText: a
    // })
  };

  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            centerComponent={{
              text: "Monkey-chunkey",
              style: { color: "#000", fontSize: 20 },
            }}
            backgroundColor={"#808080"}
          />

          <TextInput
            style={styles.input}
            placeholder="enter the chunkey"
            onChangeText={(text) => {
              this.setState({
                word: text,
              });
            }}
            value={this.state.word}
          />

          <TouchableOpacity
            onPress={() => {
              var text = this.state.word.toLowerCase().trim();
              db[text]?(
              this.setState({ chunks: db[text].chunks }),
              this.setState({ phonicSounds: db[text].phones })
              ):
              alert("The word does not exist in our database");

          
            }}
          >
            <Text>Go</Text>
          </TouchableOpacity>


          <View>
            {this.state.chunks.map((chunk , index) => {
              return (
           <PhonicSoundBtn  wordChunk={this.state.chunks[index]} soundChunk={this.state.phonicSound[index]}/>
              );
            })}
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
