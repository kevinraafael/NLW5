import React from "react";
import { SafeAreaView,Platform,View, Text, Image, TouchableOpacity,StyleSheet } from "react-native";
import wateringImg from '../../assets/watering.png'
import colors from '../colors'
import {Button} from '../components/Button'
import { useState } from "react"; 
export function Welcome() {

  const [visible ,setVisible] =   useState(false) // Use state trabalha por mudancas de estado que permite manipula
  //rmos e modificarmos os codigos como bem entendermos

  function handleVisibility( ){ 
    setVisible(true)
  }
  return (
    <SafeAreaView style ={styles.container}>
      
      <Text style = {styles.title}>Gerencie {'\n'}suas plantas{'\n'} de forma fácil</Text>
      
      <Image style = {styles.image}source={wateringImg} />

      <Text style = {styles.subtitle}>Não esqueça de regar suas plantas.{'\n'}
            Nós cuidamos de lembrar você sempre que precisar.  
       </Text>
      <Button title= 'Avancar'/>  
    
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'space-between',
    paddingTop: Platform.OS === 'android' ? 25 : 0

  }, 
  title:{
    fontSize:30,
    lineHeight:60,
    fontWeight:'bold',
    textAlign:'center',
    color: colors.heading
  },
  subtitle:{
    textAlign:'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color:colors.heading
  },
  
  image: {
    width:292,
    height:284,
    
},
})