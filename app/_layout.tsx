import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "Início" }}
      />
      <Tabs.Screen
        name="categorias"
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name="sobrem"
        options={{ title: "Sobre Mim" }}
      />
    </Tabs>
  );
}