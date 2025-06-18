import { View, Text, Pressable } from "react-native";
import { Link, useLocalSearchParams, Stack } from "expo-router";
export default function ImageScreen() {
  const { name } = useLocalSearchParams<{ name: string }>();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ title: "Image: " + name }} />

      <Text style={{ fontSize: 24, fontWeight: "600" }}>
        Image Details for {name}
      </Text>
      <Link href="/">Go to Home</Link>
    </View>
  );
}
