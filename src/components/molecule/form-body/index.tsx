import { Box, Button, TextField, useTheme } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { BodyPropsTypes } from "./type";
import { TaskTypes } from "../../../hook/type";

const Body = (props: BodyPropsTypes) => {
  const theme = useTheme();
  const [task, setTask] = useState<TaskTypes>({
    id: 0,
    title: "",
    desc: "",
    done: false,
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };

  const handleAddTask = () => {
    if (task.title.trim() === "") return;
    const newTask: TaskTypes = {
      id: Date.now(),
      title: task.title,
      desc: task.desc,
      done: false,
    };
    props.addTask(newTask);
    setTask({ id: 0, title: "", desc: "", done: false });
  };

  return (
    <>
      <Box display="flex" flexDirection="column" style={{ width: "100%" }}>
        <TextField
          value={task.title}
          onChange={handleInputChange}
          fullWidth
          label="Task"
          name="title"
          sx={{
            marginBottom: 2,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.secondary.main,
            },
          }}
          focused
        />
        <TextField
          value={task.desc}
          onChange={handleInputChange}
          fullWidth
          label="Description"
          name="desc"
          focused
        />
        <Button
          variant="contained"
          sx={{ marginTop: 2 }}
          size="large"
          onClick={handleAddTask}
        >
          Add todo
        </Button>
      </Box>
    </>
  );
};

export default Body;
