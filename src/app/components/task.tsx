import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Task } from "@/types/tasks";
import Feather from "@expo/vector-icons/Feather";
import colors from "tailwindcss/colors";
import clsx from "clsx";
import useTask from "@/hooks/useTaskCtx";

type TaskProps = {
  task: Task;
};

export function TaskItem({ task }: TaskProps) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const { handleUpdateTask, handleDeleteTask } = useTask();

  function updateTask() {
    setToggleCheckBox(!toggleCheckBox);
    handleUpdateTask(task.id);
  }

  return (
    <View className="flex-row items-center justify-between bg-gray-500 p-3 border border-gray-400 rounded-lg gap-3">
      <Pressable
        className={clsx(
          "border-2 border-blue rounded-full h-6 w-6 items-center justify-center",
          toggleCheckBox && "bg-purpleDark border-transparent"
        )}
        onPress={updateTask}
      >
        {toggleCheckBox && <Feather name="check" size={20} color="white" />}
      </Pressable>

      <Text
        className={clsx(
          "text-gray-100 font-body text-sm flex-1",
          toggleCheckBox && "line-through text-gray-300"
        )}
      >
        {task.desc}
      </Text>
      <TouchableOpacity
        onPress={() => handleDeleteTask(task.id)}
        activeOpacity={0.7}
      >
        <Feather name="trash-2" size={20} color={colors.gray[400]} />
      </TouchableOpacity>
    </View>
  );
}
