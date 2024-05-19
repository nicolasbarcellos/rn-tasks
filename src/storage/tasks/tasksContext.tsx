import { Task } from "@/types/tasks";
import { ReactNode, createContext, useEffect, useState } from "react";
import { addTasksToList } from "../addTasksToList";

type TaskCtxData = {
  tasks: Task[];
  isCompleted: number;
  handleAddTask: (task: Task) => void;
  handleUpdateTask: (id: string) => void;
  handleDeleteTask: (id: string) => void;
};

type TaskProviderProps = {
  children: ReactNode;
};

export const TaskCtx = createContext<TaskCtxData>({} as TaskCtxData);

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isCompleted, setIsCompleted] = useState(0);

  function handleAddTask(task: Task) {
    setTasks((prev) => [...prev, task]);
    addTasksToList(task);
  }

  function handleUpdateTask(id: string) {
    const tasksFiltered = tasks.map((task) => {
      return task.id === id
        ? { ...task, isCompleted: !task.isCompleted }
        : task;
    });

    setTasks(tasksFiltered);
  }

  useEffect(() => {
    const tasksCompleted = tasks.filter((task) => task.isCompleted);
    setIsCompleted(tasksCompleted.length);
  }, [tasks]);

  function handleDeleteTask(id: string) {
    const taskFiltered = tasks.filter((task) => task.id !== id);
    setTasks(taskFiltered);
  }

  return (
    <TaskCtx.Provider
      value={{
        tasks,
        isCompleted,
        handleAddTask,
        handleUpdateTask,
        handleDeleteTask,
      }}
    >
      {children}
    </TaskCtx.Provider>
  );
};
