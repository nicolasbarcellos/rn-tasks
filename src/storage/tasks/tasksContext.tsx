import { Task } from "@/types/tasks";
import { ReactNode, createContext, useState } from "react";


type TaskCtxData = {
  tasks: Task[];
  handleAddTask: (task: Task) => void
};

type TaskProviderProps = {
  children: ReactNode;
};

export const TaskCtx = createContext<TaskCtxData>({} as TaskCtxData);

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(task: Task) {
    setTasks((prev) => [...prev, task])
  }

  return <TaskCtx.Provider value={{ tasks, handleAddTask }}>{children}</TaskCtx.Provider>;
};
