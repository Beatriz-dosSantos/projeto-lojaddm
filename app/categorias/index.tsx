import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { data } from "../../data/index";

export default function Categorias() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione uma categoria</Text>
      {data.categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          style={styles.categoryButton}
          onPress={() => router.push(`/categorias/${category.id}`as any)}
        >
          <Image source={{ uri: category.cover }} style={styles.categoryImage} />
          <Text style={styles.categoryText}>{category.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  categoryButton: {
    marginBottom: 15,
    alignItems: "center",
  },
  categoryImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
});