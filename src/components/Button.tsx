import React from 'react';

import {TouchableOpacity,StyleSheet,Text,TouchableOpacityProps} from 'react-native'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
interface ButtonProps extends TouchableOpacityProps{
    title: string 
}  // Essa interface permite com quee possamos
// reutilizar o botao diversas vezes, pois o titulo
// sera passado como propriedade. - Beneficio do typscript
// O  touchable opacity props para herdamos as propriedades dele

export function Button ({title,...rest} :ButtonProps){
    return(
    <TouchableOpacity style={styles.container}activeOpacity ={0.7}{...rest} >
        <Text style = {styles.text}>
        {title}
        </Text>
      </TouchableOpacity>)

}
//o spread operator ...rest   vai despejar as propriedades do touchable opress
const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.green,
        borderRadius:16, 
        height:56,
        justifyContent:'center',
        alignItems:'center', 
        
      },
      text:{
        color:colors.white,
        fontSize:16,
        fontFamily:fonts.heading,
        
      },
})
    
