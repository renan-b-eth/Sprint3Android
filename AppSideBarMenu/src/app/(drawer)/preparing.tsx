//Importanteo os componentes necessários da biblioteca do react native 

import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import React, { useState } from 'react';

// Definiindo o componente funional home como padrão de exportação
export default function Preparing() {

  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      
      <Image
        source={require('./logo.png')}
        style={{
          width: 200,
          height: 200,
          resizeMode: 'contain'
        }}
      />  
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
      />
      <Button 
      title="LOGIN"
      onPress={() => alert('VERIFICAR LOGIN POSTERIOMENTE!')}
        />
        <Button 
      title="CADASTRO"
      onPress={() => alert('IR PARA A TELA DE CADASTRO SEM SER NO MENU')}
        />
      <Text style={styles.title}>Recuperar Senha</Text>
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
      fontSize: 15,
      fontWeight: 'bold',
        color: "#000",
    },
    input: {
      width: '80%',
      height: 40,
      borderBottomColor: '#000',    // Cor do traço
      borderBottomWidth: 1,         // Espessura do traço
      paddingHorizontal: 10        // Espaçamento interno
    }
})