import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const App = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // snap points
  const snapPoints = useMemo(() => ["75%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // method to expand bottom sheet
  const expandBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  // renders
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.buttonContainer}>
          <Button title="Expand Bottom Sheet" onPress={expandBottomSheet} />
        </View>
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <BottomSheetView style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </BottomSheetView>
        </BottomSheet>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  safeArea: {
    flex: 1,
  },
  buttonContainer: {
    padding: 16,
    backgroundColor: "white",
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
  },
});

export default App;
