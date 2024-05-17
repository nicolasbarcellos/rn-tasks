import { ReactNode, createContext, useState } from "react";

type Task = {
  id: string;
  desc: string;
  isCompleted: boolean;
};

type TaskCtxData = {
  tasks: Task[];
};

type TaskProviderProps = {
  children: ReactNode;
};

export const TaskCtx = createContext<TaskCtxData>({} as TaskCtxData);

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return <TaskCtx.Provider value={{ tasks }}>{children}</TaskCtx.Provider>;
};
