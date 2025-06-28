import {
  View,
  Text,
  Pressable,
  ActivityIndicator,
  StyleSheet,
  Image,
  Button,
} from "react-native";
import { Link, Stack, router } from "expo-router";
import {
  useCameraPermissions,
  CameraView,
  CameraType,
  CameraCapturedPicture,
  useMicrophonePermissions,
} from "expo-camera";
import { useEffect, useRef, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import path from "path";
import * as FileSystem from "expo-file-system";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [micPermission, requestMicPermission] = useMicrophonePermissions();
  const [isRecording, setIsRecording] = useState(false);
  const [video, setVideo] = useState<string>();
  const [mode, setMode] = useState<"picture" | "video">("picture");

  useEffect(() => {
    if (permission && !permission.granted && permission.canAskAgain) {
      requestPermission();
    }
  }, [permission]);

  useEffect(() => {
    if (micPermission && !micPermission.granted && micPermission.canAskAgain) {
      requestMicPermission();
    }
  }, [micPermission]);

  const [facing, setFacing] = useState<CameraType>("back");
  const [picture, setPicture] = useState<CameraCapturedPicture>();

  const camera = useRef<CameraView>(null);

  const saveFile = async (uri: string) => {
    const filename = path.parse(uri).base;
    console.log(filename, "******");

    await FileSystem.copyAsync({
      from: uri,
      to: FileSystem.documentDirectory + filename,
    });
    setPicture(undefined);
    setVideo(undefined);
    router.push("/");
  };


  if (!permission || !micPermission) {
    // Permissions are still loading
    return <ActivityIndicator size="large" color="royalblue" />;
  }

  if (!permission.granted || (mode === "video" && !micPermission.granted)) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
      >
        <Text style={{ color: "white", marginBottom: 20, textAlign: "center" }}>
          We need access to your camera
          {mode === "video" && !micPermission.granted && " and microphone"}.
        </Text>
        <Button
          onPress={
            !permission.granted ? requestPermission : requestMicPermission
          }
          title="Grant Permission"
        />
      </View>
    );
  }

  if (picture) {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: picture.uri }}
          style={{ width: "100%", flex: 1 }}
        />

        <View style={{ padding: 10 }}>
          <SafeAreaView edges={["bottom"]}>
            <Button title="Save" onPress={() => saveFile(picture.uri)} />
          </SafeAreaView>
        </View>
        <MaterialIcons
          onPress={() => {
            setPicture(undefined);
          }}
          name="close"
          size={35}
          color="white"
          style={{ position: "absolute", top: 50, left: 20 }}
        />
      </View>
    );
  }

  if (video) {
    return (
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>Video captured</Text>
        </View>

        <View style={{ padding: 10 }}>
          <SafeAreaView edges={["bottom"]}>
            <Button title="Save" onPress={() => saveFile(video)} />
            <View style={{ marginTop: 10 }} />
            <Button
              title="Discard"
              color="red"
              onPress={() => setVideo(undefined)}
            />
          </SafeAreaView>
        </View>
        <MaterialIcons
          onPress={() => {
            setVideo(undefined);
          }}
          name="close"
          size={35}
          color="white"
          style={{ position: "absolute", top: 50, left: 20 }}
        />
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  const onButtonPress = () => {
    if (mode === "picture") {
      takePicture();
    } else {
      if (isRecording) {
        camera.current?.stopRecording();
      } else {
        startRecording();
      }
    }
  };

  const takePicture = async () => {
    const res = await camera.current?.takePictureAsync();
    console.log(res);
    setPicture(res);
  };

  const startRecording = async () => {
    setIsRecording(true);
    const res = await camera.current?.recordAsync();
    setVideo(res?.uri);
    setIsRecording(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <CameraView
        ref={camera}
        mode={mode}
        style={styles.camera}
        facing={facing}
      >
        <View style={styles.footer}>
          <View style={{ flex: 1 }} />
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Pressable
              style={[
                styles.recordButton,
                isRecording && styles.recordButtonRecording,
              ]}
              onPress={onButtonPress}
            />
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <MaterialIcons
              name="flip-camera-ios"
              color={"white"}
              size={30}
              onPress={toggleCameraFacing}
            />
          </View>
        </View>
        <View style={styles.modeSwitchContainer}>
          <Pressable onPress={() => setMode("picture")}>
            <Text
              style={[
                styles.modeText,
                mode === "picture" && styles.modeTextActive,
              ]}
            >
              Photo
            </Text>
          </Pressable>
          <Pressable onPress={() => setMode("video")}>
            <Text
              style={[
                styles.modeText,
                mode === "video" && styles.modeTextActive,
              ]}
            >
              Video
            </Text>
          </Pressable>
        </View>
      </CameraView>
      <MaterialIcons
        name="close"
        color={"royalblue"}
        style={styles.close}
        size={30}
        onPress={() => router.back()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    width: "100%",
    height: "100%",
  },
  close: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  footer: {
    marginTop: "auto",
    padding: 20,
    paddingBottom: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#00000099",
  },
  recordButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "white",
  },
  recordButtonRecording: {
    backgroundColor: "crimson",
  },
  modeSwitchContainer: {
    position: "absolute",
    bottom: 120,
    alignSelf: "center",
    flexDirection: "row",
    gap: 30,
  },
  modeText: {
    color: "white",
    fontSize: 16,
  },
  modeTextActive: {
    color: "yellow",
    fontWeight: "bold",
  },
});
