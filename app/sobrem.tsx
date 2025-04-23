import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SobreMim() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre Mim</Text>
      <Text style={styles.bio}>
        Nome: Beatriz Amanda dos Santos {"\n"}
        Curso: Engenharia de Software {"\n"}
        Semestre: 5º
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bio: {
    fontSize: 18,
    textAlign: "center",
  },
});