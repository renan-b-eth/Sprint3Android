//Importanteo os componentes necessários da biblioteca do react native 

import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import React, { useState } from 'react';

// Definiindo o componente funional home como padrão de exportação
export default function Delivered() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./clinicasCredenciadas.png')}
        style={{
          width: 200,
          height: 200,
          resizeMode: 'contain',
          position: "relative",
          top: -250
          
        }}
      /> 
      <Image
        source={require('./logo1.png')}
        style={{
          width: 50,
          height: 50,
          resizeMode: 'contain',
          position: "relative",
          top: -250,
          left: -130
          
        }}
      /> 





      <Image
        source={require('./menu.png')}
        style={{
          width: 200,
          height: 200,
          resizeMode: 'contain',
          marginBottom: -350
        }}
      /> 
    </View>
  );
}

//Definindo os estilos para os elementos da tela
const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa toda a tela disponível
    backgroundColor: "#fff", // define o fundo da tela como branco
    alignItems: "center", //alinha os itens no centro da tela
    justifyContent: "center",  // alinha os itens no centro  verticalmente
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
        color: "#000",
    },
})