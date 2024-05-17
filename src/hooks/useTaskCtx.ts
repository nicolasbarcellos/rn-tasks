import { TaskCtx } from "@/storage/tasks/tasksContext";
import { useContext } from "react";

export default function useTask() {
  return useContext(TaskCtx);
}
