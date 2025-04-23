import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { usePathname } from "expo-router";
import { data } from "../../../data/index";

export default function DetalhesDoProduto() {
  const pathname = usePathname();
  const produtoId = Number(pathname.split("/").pop());
  const produto = data.products.find((item) => item.id === produtoId);

  if (!produto) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Produto não encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Produto</Text>
      <Image source={{ uri: produto.image }} style={styles.productImage} />
      <Text style={styles.productName}>Nome: {produto.title}</Text>
      <Text style={styles.productDescription}>Descrição: {produto.description}</Text>
      <Text style={styles.productPrice}>Preço: R$ {produto.price.toFixed(2)}</Text>
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
    marginBottom: 20,
  },
  productImage: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 15,
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2ecc71",
  },
  errorText: {
    fontSize: 18,
    color: "red",
    fontWeight: "bold",
  },
});