import { Slot, Stack, Tabs } from "expo-router";
import { View, Text } from "react-native";

export default function RootLayout() {
  return (
    <View style={{ backgroundColor: "lightgreen", flex: 1 }}>
      {/*Header*/}
      <Stack
        screenOptions={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "royalblue" },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
      </Stack>
      {/*Footer*/}
    </View>
  );
}
