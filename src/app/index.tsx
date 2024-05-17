import { View, StatusBar } from "react-native";
import React, { useState } from "react";

import colors from "tailwindcss/colors";

import { Header } from "./components/header";
import { Input } from "./components/input";
import { Button } from "./components/button";

import Feather from "@expo/vector-icons/Feather";
import ProgressHeader from "./components/progressHeader";
import useTaks from "@/hooks/useTaskCtx";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [inputIsFocused, setInputIsFocused] = useState(false);

  const { tasks } = useTaks();
  console.log(tasks);

  function handleSubmitingEnd() {
    setInputIsFocused(false);
    setInputValue("");
  }

  return (
    <View className="flex-1 bg-homeBg">
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle={"light-content"}
      />
      <Header />
      <View className="flex-row gap-1 px-6 -mt-9 justify-center">
        <Input
          onFocus={() => setInputIsFocused(true)}
          isFocused={inputIsFocused}
          placeholder="Adicione uma tarefa"
          placeholderTextColor={colors.gray[400]}
          returnKeyType="send"
          onSubmitEditing={handleSubmitingEnd}
          onChangeText={setInputValue}
          value={inputValue}
        />
        <Button className="bg-blueDark">
          <Feather name="plus-circle" size={24} color={colors.white} />
        </Button>
      </View>

      <ProgressHeader />
    </View>
  );
}
