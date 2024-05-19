import AsyncStorage from "@react-native-async-storage/async-storage";

import { Task } from "@/types/tasks";
import { TASK_COLLECTION } from "./storageConfig";
import { getAllTasksStorage } from "./getAllTasksStorage";

type addTasksToListProps = {
  value: Task;
};

export async function addTasksToList(value: Task) {
  try {
    const tasks = await getAllTasksStorage();
    await AsyncStorage.setItem(
      TASK_COLLECTION,
      JSON.stringify([...tasks, value])
    );
  } catch (error) {
    // implementar toast
    throw error;
  }
}
