import React from "react";
//import { Welcome } from "./src/pages/Welcome";
import {UserIdentification} from './src/pages/UserIdentification'
import {useFonts,Jost_400Regular,Jost_600SemiBold} from '@expo-google-fonts/jost'
import Routes from './src/routes'

import AppLoading from 'expo-app-loading'
export default function App() {
  const  [fontsLoaded]  = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
    
  }) // Declaramos as fontes como objeto antes de chamar as demais telas
  // para poder usar as fontes no projeto

  if(!fontsLoaded){
    return <AppLoading/>
    
    // Enquanto as fontes nao forem carregadas , segura a tela de Splash
    //Expo app loading melhor forma para lidar com o caregamento de fontes
  } 
    
  return(
    <Routes></Routes>
  ) 

}

// Vamos intalar o expo loading para poder segurar a tela  de splash
// ate a fonte ser carregada. Para isso instalamos o expo -app-loading
