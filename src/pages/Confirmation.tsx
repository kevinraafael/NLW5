import React from 'react';
import {SafeAreaView,StyleSheet,View,Text} from 'react-native'

import {Button} from   '../components/Button'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import { useNavigation } from '@react-navigation/core';

export  function Confirmation () {
    
    const navigation = useNavigation()
    
    function handleMoveon(){
        navigation.navigate('PlantSelect')
    }
    return(
        <SafeAreaView style = {styles.container}>
        <View style = {styles.content}>
            <Text style = {styles.emoji}>
                😆
            </Text>
            <Text style = {styles.title}>Prontinho</Text>
            <Text style = {styles.subtitile}>Agora vamos começar a cuidar das suas
            plantinhas com muito cuidadto
            </Text>
            <View style= {styles.footer}>
            <Button
            title= "Começar"
            onPress = {handleMoveon}
            />
            
        </View>
        </View>
        
        </SafeAreaView>
    )
    
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-around',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        padding:30,
    },
    title:{
        fontSize:22,
        fontFamily: fonts.heading,
        textAlign:'center',
        color: colors.heading,
        lineHeight:38,
        marginTop:15
        
    },
    subtitile:{
        fontFamily:fonts.text,
        fontSize:17,
        textAlign:'center',
        paddingVertical:10,
        color:colors.heading,
    },
    emoji:{
        fontSize:78,

    },
    footer:{
        width:"100%",   
        paddingHorizontal:50,
        marginTop:20        
    }
})
    
