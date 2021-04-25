import React from 'react'
import {View,Text,Image,StyleSheet,Platform} from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { color } from 'react-native-reanimated'

import UserImg from '../../assets/Perfil.png'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
export function Header() {
    return (
        <View style ={styles.container}>
            <View>
                <Text style ={styles.getting}>Olá,</Text>
                <Text style = {styles.userName}>Kevin</Text>
            </View>
            
            <Image source = {UserImg} style = {styles.image}>
            </Image>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        width:'100%',
        flexDirection:'row',
        justifyContent : 'space-between',
        alignItems: 'center',
        //marginTop: getStatusBarHeight(),
        paddingVertical:20,
        padding:20
       // backgroundC   olor: colors.white,  
        
        // para notch iphone XmarginTop: getStatusBarHeigth()
    },
    image:{
        width:80,
        height:80,
        borderRadius:40, // Dica : colocar metade da altura e largura ja deixa num nivel bom
        
    },
    getting:{
        fontSize:32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName:{
        
        fontSize:32,
        color:colors.heading,
        
    }   
})