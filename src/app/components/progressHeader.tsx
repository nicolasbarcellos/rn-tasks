import { View, Text } from "react-native";
import React from "react";

export default function ProgressHeader() {
  return (
    <View className="flex-row justify-between px-6 mt-8">
      <View className="flex-row items-center gap-4">
        <Text className="text-blue font-bold text-sm">Criadas</Text>
        <View className="flex items-center justify-center bg-gray-400 rounded-full px-2 py-[2px]">
          <Text className="text-gray-200 font-bold text-xs">0</Text>
        </View>
      </View>

      <View className="flex-row items-center gap-4">
        <Text className="text-purple font-bold text-sm">Concluídas</Text>
        <View className="flex items-center justify-center bg-gray-400 rounded-full  px-2 py-[2px] ">
          <Text className="text-gray-200 font-bold text-xs">0</Text>
        </View>
      </View>
    </View>
  );
}
