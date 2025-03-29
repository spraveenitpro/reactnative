import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { FontAwesome } from "@expo/vector-icons";

const App = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={[500, 700]}
        handleStyle={{
          backgroundColor: "#000000",
        }}
        handleIndicatorStyle={{
          backgroundColor: "white",
        }}
        handleComponent={() => (
          <View style={styles.handleContainer}>
            <FontAwesome name="bell" size={19} color="white" />
            <FontAwesome name="bolt" size={19} color="white" />
            <View style={styles.indicator} />
            <FontAwesome name="download" size={19} color="white" />
            <FontAwesome name="plus" size={19} color="white" />
          </View>
        )}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text style={styles.bottomSheetText}>Network Information</Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262F2A",
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
    backgroundColor: "#000000",
  },
  bottomSheetText: {
    color: "white",
  },
  handleContainer: {
    backgroundColor: "#000000",
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
  indicator: {
    width: 40,
    height: 4,
    backgroundColor: "white",
  },
});

export default App;
