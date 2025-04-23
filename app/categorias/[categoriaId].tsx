import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, usePathname } from "expo-router";
import { data } from "../../data/index";

export default function ProdutosPorCategoria() {
  const router = useRouter();
  const pathname = usePathname();
  const categoriaId = Number(pathname.split("/").pop());
  const produtos = data.products.filter((produto) => produto.idCategory === categoriaId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos</Text>
      {produtos.map((produto) => (
        <TouchableOpacity
          key={produto.id}
          style={styles.productButton}
          onPress={() => router.push(`/produtos/${produto.id}`as any)}
        >
          <Image source={{ uri: produto.image }} style={styles.productImage} />
          <Text style={styles.productText}>{produto.title}</Text>
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
  },
  productButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  productText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});