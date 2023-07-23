import { TaskTypes } from "../../../hook/type";

export type ListPropsType = {
  tasks: TaskTypes[];
  deleteTask: (id: number) => void;
  markTaskAsDone: (id: number) => void;
};
