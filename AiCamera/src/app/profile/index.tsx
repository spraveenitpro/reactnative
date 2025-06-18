import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "600" }}>Profile Screen</Text>
      <Link href="/">Go to Home</Link>
    </View>
  );
}
