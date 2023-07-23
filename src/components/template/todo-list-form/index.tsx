import Form from "../../organism/form";
import List from "../../organism/list";
import useTaskList from "../../../hook/task";

const TodoListForm = () => {
  const { tasks, addTask, deleteTask, markTaskAsDone } = useTaskList([]);

  return (
    <div className="app-container">
      <div className="main-container">
        <Form addTask={addTask} />
        <List
          tasks={tasks}
          deleteTask={deleteTask}
          markTaskAsDone={markTaskAsDone}
        />
      </div>
    </div>
  );
};

export default TodoListForm;
