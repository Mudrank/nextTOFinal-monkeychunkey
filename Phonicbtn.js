import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import {Audio} from 'expo-av'

export default class PhonicSoundBtn extends React.Component{
constructor(props){
  super(props);
  this.state = {
    BtnIndex : ' ',
  }
}

componentDidMount(){
  
}


playSound = async(soundChunk) => {
console.log(soundChunk)

var soundLink = 'https://s3-whitehatjrcontent.whjr.online/phones/'+ soundChunk +'.mp3';
console.log(soundLink)
await Audio.Sound.createAsync(
  { uri: soundLink },
  { shouldPlay: true }
);
}

  render() {
    return (
   <TouchableOpacity style={this.props.buttonIndex === this.state.BtnIndex 
  ? [styles.chunkButton , {backgroundColor:'white'}] : [styles.chunkButton , {backgroundColor:'red'}]
  
  } onPress={() => {
     this.setState({
BtnIndex : this.props.buttonIndex
     });
     console.log(this.state.BtnIndex)
     this.playSound(this.props.soundChunk)
   }}>
<Text

style={this.props.buttonIndex === this.state.BtnIndex 
  ? [styles.ButtonText , {color:'red'}] : [styles.ButtonText , {color:'white'}]}

>{this.props.wordChunk}</Text>
   </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  chunkButton:{
    width: 60,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'red'
  },
  ButtonText:{
    textAlign: 'center',
    fontSize: 30,
    color: 'white'
  }
})