import React from "react";
import { View, Platform, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../utils/index";

export default function ReloadIcon({load}) {
  const {PRIMARY_COLOR} = colors;
  const reloadIconName = Platform.OS === "ios" ? "ios-refresh" : "md-refresh";
  return (
    <View style={styles.reloadIconProperty}>
      <Ionicons name={reloadIconName} size={24} color={PRIMARY_COLOR} onPress={load} />
    </View>
  );
}

const styles = StyleSheet.create({
  reloadIconProperty: {
    position: "absolute",
    top: 40,
    right: 20,
  },
});
