import AsyncStorage from "@react-native-async-storage/async-storage";

import { Task } from "@/types/tasks";
import { TASK_COLLECTION } from "./storageConfig";

export async function getAllTasksStorage() {
  try {
    const storage = await AsyncStorage.getItem(TASK_COLLECTION);

    const tasks: Task[] = storage ? JSON.parse(storage) : [];

    return tasks;
  } catch (error) {
    // implementar toast
    throw error;
  }
}
