import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import db from "../db";
import { id } from "@instantdb/react-native";

const { height: screenHeight } = Dimensions.get("window");

interface SketchElement {
  id: string;
  type: "rectangle" | "circle" | "triangle" | "diamond" | "star" | "hexagon";
  x: number;
  y: number;
  color: string;
  width?: number;
  height?: number;
}

const COLORS = [
  "#6366F1", // Indigo
  "#EC4899", // Pink
  "#10B981", // Emerald
  "#F59E0B", // Amber
  "#8B5CF6", // Violet
  "#EF4444", // Red
];

interface MovableElementProps {
  element: SketchElement;
  onMove: (id: string, x: number, y: number) => void;
  onSelect: (id: string) => void;
  isSelected: boolean;
}

export default function Index() {
  const { data } = db.useQuery({
    elements: {},
  });

  const elements = data?.elements || [];

  const [selectedTool, setSelectedTool] = useState<
    "rectangle" | "circle" | "triangle" | "diamond" | "star" | "hexagon"
  >("circle");
  const [selectedColor, setSelectedColor] = useState("#6366F1");
  const [selectedElementId, setSelectedElementId] = useState<string | null>(
    null
  );

  const getToolIcon = (toolType: string) => {
    switch (toolType) {
      case "circle":
        return "●";
      case "rectangle":
        return "▭";
      case "triangle":
        return "▲";
      case "diamond":
        return "◆";
      case "star":
        return "★";
      case "hexagon":
        return "⬡";
      default:
        return "●";
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View style={styles.toolbar}>
        <View style={styles.topRow}>
          <View style={styles.toolButtons}>
            {[
              "rectangle",
              "circle",
              "triangle",
              "diamond",
              "star",
              "hexagon",
            ].map((tool) => (
              <TouchableOpacity
                key={tool}
                style={[
                  styles.toolButton,
                  selectedTool === tool && styles.selectedTool,
                  selectedTool === tool && { backgroundColor: selectedColor },
                ]}
                onPress={() => setSelectedTool(tool as any)}
              >
                <Text
                  style={[
                    styles.toolButtonText,
                    selectedTool === tool && styles.selectedToolText,
                  ]}
                >
                  {getToolIcon(tool)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.bottomRow}>
          <TouchableOpacity
            style={styles.clearButton}
            //onPress={clearCanvas}
          >
            <Text style={styles.clearButtonText}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.colorRow}>
          <View style={styles.colorPalette}>
            {COLORS.map((color) => (
              <TouchableOpacity
                key={color}
                style={[
                  styles.colorButton,
                  { backgroundColor: color },
                  selectedColor === color && styles.selectedColor,
                ]}
                onPress={() => setSelectedColor(color)}
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  canvas: {
    flex: 1,
    position: "relative",
  },
  elementContainer: {
    position: "absolute",
    padding: 6,
  },
  selectedElement: {
    borderWidth: 2,
    borderColor: "#6366F1",
    borderStyle: "dashed",
    borderRadius: 8,
    boxShadow: "0 2px 4px 0 rgba(99, 102, 241, 0.3)",
  },
  rectangleElement: {
    borderRadius: 8,
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
  },
  circleElement: {
    borderRadius: 100,
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
  },
  triangleElement: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
  },
  diamondElement: {
    transform: [{ rotate: "45deg" }],
    borderRadius: 4,
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
  },
  starContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  starElement: {
    fontWeight: "bold",
    textShadowColor: "rgba(0,0,0,0.1)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  hexagonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  hexagonElement: {
    fontWeight: "bold",
    textShadowColor: "rgba(0,0,0,0.1)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  toolbar: {
    position: "absolute",
    bottom: 50,
    left: 20,
    right: 20,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: 20,
    padding: 16,
    boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10px)",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  colorRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  toolButtons: {
    flexDirection: "row",
    gap: 12,
    backgroundColor: "#F3F4F6",
    borderRadius: 16,
    padding: 6,
  },
  toolButtonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#6B7280",
  },
  toolButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  clearButton: {
    width: 44,
    height: 44,
    backgroundColor: "#EF4444",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 2px 4px 0 rgba(239, 68, 68, 0.3)",
  },
  clearButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  colorPalette: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    borderRadius: 16,
    padding: 8,
  },
  colorButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 3,
    borderColor: "transparent",
    boxShadow: "0 2px 3px 0 rgba(0, 0, 0, 0.1)",
  },
  selectedColor: {
    borderColor: "#FFFFFF",
    borderWidth: 4,
    boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.2)",
    transform: [{ scale: 1.1 }],
  },
  selectedTool: {
    backgroundColor: "#6366F1",
  },
  selectedToolText: {
    color: "#FFFFFF",
  },
});
