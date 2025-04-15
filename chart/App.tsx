import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { BACKGROUND_COLOR, data } from "./constants";
import WeeklyBarChart from "./components/weekly-bar-chart";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <WeeklyBarChart activeWeek={data[0]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
});
