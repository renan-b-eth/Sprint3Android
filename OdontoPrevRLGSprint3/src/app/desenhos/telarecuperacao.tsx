

import { StyleSheet, Text, View } from "react-native";

export default function TelaRecuperacao() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Recuperacao</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center", 
    justifyContent: "center", 
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
        color: "#000",
    },
})