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
      checkWord:'',
      chunks: [],
      displayText: "",
      phonicSounds: [],
    };
  }

  showChunk = async () => {
    // var a = this.state.word
    // this.setState({
    // displayText: a
    // })
  };

  setInterval(this.setState({
    word : this.state.checkWord
  })

  , 2000);

  

checkWWord = async () =>{
  var text = this.state.word.toLowerCase().trim();
  db[text]?(
  this.setState({ chunks: db[text].chunks }),
  this.setState({ phonicSounds: db[text].phones })
  ):
  alert("The word does not exist in our database");
}

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
                checkWord: text,
              });
            }}
            value={this.state.checkWord}
          />

          <TouchableOpacity
            onPress={() => 
              this.state.word === this.state.checkWord ? alert('same word , enter a new word') :
this.checkWWord()
            }
          >
            <Text>Go</Text>
          </TouchableOpacity>


          <View>
            {this.state.chunks.map((item , index) => {
              return (
           <PhonicSoundBtn  wordChunk={this.state.chunks[index]} soundChunk={this.state.phonicSounds[index]} buttonIndex={index}/>
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
