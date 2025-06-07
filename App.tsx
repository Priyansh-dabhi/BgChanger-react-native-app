/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { use }  from 'react';
import { useState } from 'react';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const [color,setColor] = useState('#2980b9')
  // setColor('#e74c3c')

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)] ;
    }
    setColor(color)
  }
  return (
    <>
    <StatusBar backgroundColor={color} />
    <View style={[styles.container,{backgroundColor:color}]}>
      <TouchableOpacity 
      onPress={generateColor}
      >
        <View style={styles.actionBtn}>
          <Text style={styles.btnText}>Press Me</Text>
          <Text>{color}</Text>
        </View>
      </TouchableOpacity>  
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    actionBtn:{
      backgroundColor:'#e67e22',
      borderRadius:12,
      paddingVertical:20,
      paddingHorizontal:40,
    },
    btnText:{
      fontWeight:'bold'
    },
    colorChange:{
      backgroundColor:'red'
    }
});

export default App;
