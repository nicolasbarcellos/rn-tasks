import { View, StatusBar, FlatList, Keyboard, Text } from "react-native";
import React, { useState } from "react";

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import Feather from "@expo/vector-icons/Feather";
import colors from "tailwindcss/colors";

import useTaks from "@/hooks/useTaskCtx";

import { Header } from "./components/header";
import { Input } from "./components/input";
import { Button } from "./components/button";
import { TaskItem } from "./components/task";
import { ProgressHeader } from "./components/progressHeader";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [inputIsFocused, setInputIsFocused] = useState(false);

  const { tasks, isCompleted, handleAddTask } = useTaks();

  function handleSubmitingEnd() {
    if (inputValue) {
      handleAddTask({ desc: inputValue, isCompleted: false, id: uuidv4() });
    }
    setInputIsFocused(false);
    setInputValue("");
    Keyboard.dismiss();
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
        <Button className="bg-blueDark" onPress={handleSubmitingEnd}>
          <Feather name="plus-circle" size={24} color={colors.white} />
        </Button>
      </View>

      <ProgressHeader created={tasks.length} done={isCompleted} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem task={item} />}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingBottom: 40,
          marginTop: 20,
          gap: 20,
        }}
        ListEmptyComponent={() => (
          <View className="items-center mt-12">
            <Feather name="clipboard" size={56} color={colors.gray[500]} />
            <Text className="font-bold text-sm text-gray-300 leading-6 mt-4">
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text className="text-gray-300 font-body text-sm">
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
