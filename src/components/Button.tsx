import React from 'react';

import {TouchableOpacity,StyleSheet,Text,TouchableOpacityProps} from 'react-native'
import colors from '../colors'

interface ButtonProps extends TouchableOpacityProps{
    title: string 
} // Essa interface permite com quee possamos
// reutilizar o botao diversas vezes, pois o titulo
// sera passado como propriedade. - Beneficio do typscript
// O  touchable opacity props para herdamos as propriedades dele

export function Button ({title, ...rest}: ButtonProps){
    return(
    <TouchableOpacity style={styles.button}activeOpacity ={0.7} {...rest}>
        <Text style = {styles.buttonText}> 
            {title}
        </Text>
      </TouchableOpacity>)

}
//o spread operator ...rest   vai despejar as propriedades do touchable opress
const styles = StyleSheet.create({
    button:{
        backgroundColor:colors.green,
        borderRadius:16,  
        marginBottom:10,
        padding:10,
        height:56,
        justifyContent:'center',
        alignItems:'center',  
      },
      buttonText:{
        color:'#FFFF',
        fontSize:24,
      },
})
    
