import React from 'react'
import {View,Text,StyleSheet,Platform,FlatList} from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import { EnvirormentButton } from '../components/EnvirormentButton'

import {Header} from "../components/Header"

export function PlantSelect(){
    return(
        <View style ={styles.container}>
            <Header style ={styles.header} ></Header>

            <View>
                <Text style= {styles.title}>
                    Em qual ambiente
                </Text>
                
                <Text style= {styles.subtitle}>
                    Você quer colocar sua planta?
                </Text>
            </View>

            <View>
                <FlatList data = {[1,2.3,4,5,6,7,8  ]}
                    renderItem = {({item}) =>(
                        <EnvirormentButton title ='Cozinha'active/>
                    )} 
                    horizontal
                    showsHorizontalScrollIndicator ={false}
                    contentContainerStyle = {styles.envirormentList}   >
                          
                </FlatList>
                
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.background,
        paddingTop: Platform.OS === 'android' ? 25 :0
        
    },
    header:{
        paddingHorizontal:20,
        
    },
    title:{
        fontFamily: fonts.text,
        fontSize:17,
        color:colors.heading,
        left:20

    },
    subtitle:{
        fontFamily: fonts.text,
        fontSize:17,
        color:colors.heading,
        left:20
    },
    envirormentList:{
        padding:40,
        justifyContent:'center',
        paddingBottom:5,
        marginLeft:12,
        marginVertical:12
    }
})

/*
FlatList

elemento para renderizar uma lista na tela
tem como propriedades data - dados
renderItem - renderizar o componente

por padráo a lista eh renderizada 
verticalmente , porem pode ser
renderizada na horizontal
chamadno horizontal , antes do fechamento
de flat list
*/