import { Typography } from "@mui/material";
import TodoCard from "../../molecule/todo-card";
import { ListPropsType } from "./type";
import FilterGroup from "../../molecule/filter-card";
import { useState } from "react";

const List = (props: ListPropsType) => {
  const [filterVal, setFilterVal] = useState("all");

  const doneTasks = props.tasks.filter((task) => task.done);
  const undoneTasks = props.tasks.filter((task) => !task.done);
  // Filter tasks based on filterVal
  const filteredTasks =
    filterVal === "completed"
      ? doneTasks
      : filterVal === "uncompleted"
      ? undoneTasks
      : props.tasks;

  return (
    <div className="list-container">
      <div className="filter-box">
        <Typography variant="body2" color="secondary">
          TODO LIST BASED ON :
        </Typography>
        <FilterGroup filterVal={filterVal} setFilterVal={setFilterVal} />
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <TodoCard
              task={task}
              deleteTask={props.deleteTask}
              markTaskAsDone={props.markTaskAsDone}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
