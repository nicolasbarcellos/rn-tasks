import { View, Text, Image } from "react-native";
import React from "react";

export function Header() {
  return (
    <View className="items-center justify-center p-24 bg-gray-700">
      <Image
        source={require("@/assets/images/logo.png")}
        className="w-36 h-10"
      />
    </View>
  );
}
