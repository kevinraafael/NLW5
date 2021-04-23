import React from "react";
import { SafeAreaView,Platform,View, Text, Image, TouchableOpacity,StyleSheet,Dimensions } from "react-native";
import wateringImg from '../../assets/watering.png'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import {useNavigation} from '@react-navigation/core'
import {Feather} from '@expo/vector-icons' //Feathe é o tipo da fonte do icone , podendo ser várias
//inclusive fonte awesome
//import { useState } from "react"; 
export function Welcome() {
  const navigation = useNavigation()
  //const [visible ,setVisible] =   useState(false) // Use state trabalha por mudancas de estado que permite manipula
  //rmos e modificarmos os codigos como bem entendermos
function handleStart(){
  navigation.navigate('UserIdentification')
}
  
  return (
    <SafeAreaView style ={styles.container}>
      <View style = {styles.wrapper }>
      <Text style = {styles.title}>Gerencie {'\n'}suas plantas de{'\n'}forma fácil</Text>
      
      <Image style = {styles.image}source={wateringImg}
        resizeMode = "contain" 
       />

      <Text style = {styles.subtitle}>Não esqueça mais de regar suas plantas.{'\n'}
          Nós cuidamos de lembrar você sempre que precisar.  
       </Text>
       <TouchableOpacity style={styles.button}activeOpacity ={0.7} onPress= {handleStart}>
        <Text>
          <Feather name= 'chevron-right' style = {styles.buttonIcon}/>
        </Text>
       </TouchableOpacity>
      </View>
      
      
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  

  }, 
  wrapper:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-around', //Evita que o container cole nas bordas do dispositivo
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  title:{
    fontSize:28,
    lineHeight:34,
    fontWeight:'bold',
    textAlign:'center',
    color: colors.heading,
    fontFamily: fonts.heading,
  },
  subtitle:{
    textAlign:'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color:colors.heading,
    fontFamily: fonts.text
  },
  
  image: {
    height:Dimensions.get('window').width *0.7, 
    //Náo estamos mais cravando uma medida fixa igual antes
    //com width e height e sim colocando o dispositvo para calcular de 
    //de acordo com suas dimensões 
    
  },
  button:{
    backgroundColor:colors.green,
    borderRadius:16,  
    marginBottom:10,
   
    height:56,
    width:56, 
    justifyContent:'center',
    alignItems:'center',  
  },
  buttonIcon:{
    color:colors.white,
    fontSize:32,
    
  },
})