import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { Link, useFocusEffect } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { useCallback, useEffect, useState } from "react";
import * as FileSystem from "expo-file-system";
import { MediaType } from "./utils/media";
import { getMediaType } from "./utils/media";
import { ResizeMode, Video } from "expo-av";
import React from "react";

type Media = {
  name: string;
  uri: string;
  type: MediaType;
};

export default function HomeScreen() {
  const [images, setImages] = useState<Media[]>([]);
  // useEffect(() => {
  //   loadFiles();
  // }, []);

  useFocusEffect(
    useCallback(() => {
      loadFiles();
    }, [])
  );

  const loadFiles = async () => {
    if (!FileSystem.documentDirectory) {
      return;
    }

    const res = await FileSystem.readDirectoryAsync(
      FileSystem.documentDirectory
    );
    console.log("🧨:", res);
    const allowedExtensions = [".jpg", ".m4v", ".mp4", ".mov"];

    setImages(
      res
        .filter((file) =>
          allowedExtensions.some((ext) => file.toLowerCase().endsWith(ext))
        )
        .map((file) => ({
          name: file,
          uri: FileSystem.documentDirectory + file,
          type: getMediaType(file),
        }))
    );
  };
  console.log("🍩: ");
  console.log(JSON.stringify(images, null, 2));

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={images}
        numColumns={3}
        contentContainerStyle={{ gap: 1 }}
        columnWrapperStyle={{ gap: 1 }}
        refreshing={false}
        onRefresh={loadFiles}
        renderItem={({ item }) => (
          <Link href={`/${item.name}`} asChild>
            <Pressable style={{ flex: 1, maxWidth: "33.33%" }}>
              {item.type === "image" && (
                <Image
                  source={{ uri: item.uri }}
                  style={{ aspectRatio: 3 / 4, borderRadius: 5 }}
                />
              )}
              {item.type === "video" && (
                <>
                  <Video
                    source={{ uri: item.uri }}
                    style={{ aspectRatio: 3 / 4, borderRadius: 5 }}
                    resizeMode={ResizeMode.COVER}
                    positionMillis={100}
                    shouldPlay
                    isLooping
                  />
                  <MaterialIcons
                    name="play-circle-outline"
                    style={{ position: "absolute" }}
                    size={30}
                    color="white"
                  />
                </>
              )}
            </Pressable>
          </Link>
        )}
      />
      <Link href="/camera" asChild>
        <Pressable style={styles.floatingButton}>
          <MaterialIcons name="photo-camera" size={30} color="white" />
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    backgroundColor: "royalblue",
    padding: 10,
    borderRadius: 50,
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  image: {
    aspectRatio: 3 / 4,
    borderRadius: 5,
  },
});
