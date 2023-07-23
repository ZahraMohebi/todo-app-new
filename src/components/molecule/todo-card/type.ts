import { TaskTypes } from "../../../hook/type";

export type CardTypes = {
  deleteTask: (id: number) => void;
  markTaskAsDone: (id: number) => void;
  task: TaskTypes;
};
