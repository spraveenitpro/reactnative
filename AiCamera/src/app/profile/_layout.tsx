import { Slot } from "expo-router";
import { View, Text } from "react-native";

export default function ProfileLayout() {
  return (
    <View style={{ backgroundColor: "purple", flex: 1, margin: 60 }}>
      {/*Header*/}
      <Slot />
      {/*Footer*/}
    </View>
  );
}
