import { Stack } from "expo-router";

export default function CategoriasLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Categorias" }}
      />
      <Stack.Screen
        name="[categoriaId]"
        options={{ title: "Produtos da Categoria" }}
      />
    </Stack>
  );
}