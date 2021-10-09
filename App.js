import * as React from 'react';
import { Text, View, Button,TouchableOpacity } from 'react-native';
import {Audio} from 'expo-av';

class SoundButton extends React.Component {
   playSound = async () => {
   await Audio.Sound.createAsync(
   { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
   {shouldPlay : true}
   );

  }

  render() {
    return (
    <TouchableOpacity style = {{
      backgroundColor : "blue",
      borderWidth : 2,
      borderColor: "pink",
      borderRadius : 180,
      width : 200,
      height : 200,
      justifyContent : "center",
      alignItems : "center",
      marginLeft : 50,

      }} onPress = {this.playSound}> 
    
    <Text style = {{
     fontWeight : "bold",
     fontSize : 20,
     color : "pink",

    }}>Press me</Text>  

    </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
        <SoundButton />
      </View>
    );
  }
}


