import { useState, useEffect } from "react";
import { TaskTypes } from "./type";

const useTaskList = (initialTasks: TaskTypes[]) => {
  const [tasks, setTasks] = useState<TaskTypes[]>(initialTasks);

  useEffect(() => {
    const storedTasks = localStorage.getItem("list");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const addTask = (newTask: TaskTypes) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, newTask];
      localStorage.setItem("list", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const deleteTask = (taskId: number) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      localStorage.setItem("list", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const markTaskAsDone = (taskId: number) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      );
      localStorage.setItem("list", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  return { tasks, addTask, deleteTask, markTaskAsDone };
};

export default useTaskList;
