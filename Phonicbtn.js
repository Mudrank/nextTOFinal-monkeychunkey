import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import {Audio} from 'expo-av'

export default class PhonicSoundBtn extends React.Component{
playSound = async(soundChunk) => {
// console.log(soundChunk)

var soundLink = `https://s3-whitehatjrcontent.whjr.online/phones/${soundChunk}.mp3`
await Audio.sound.createAsync(
  {uri : soundLink}, 
  {shouldPlay : true}
)
}

  render() {
    return (
   <TouchableOpacity onPress={() => {
     this.playSound(this.props.soundChunk)
   }}>
<Text>{this.props.wordChunk}</Text>
   </TouchableOpacity>
    )
  }
}
