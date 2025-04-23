import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { data } from "../data/index";

export default function Home() {
  const router = useRouter();

  const featuredProducts = data.products.slice(0, 3);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Catálogo de Produtos!</Text>
      <Text style={styles.subtitle}>Confira nossos destaques:</Text>
      <View style={styles.productsContainer}>
        {featuredProducts.map((product) => (
          <TouchableOpacity
            key={product.id}
            style={styles.productButton}
            onPress={() => router.push(`/categoria/produtos/${product.id}`as any)}
          >
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <Text style={styles.productTitle}>{product.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "gray",
    marginBottom: 20,
    textAlign: "center",
  },
  productsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  productButton: {
    alignItems: "center",
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});