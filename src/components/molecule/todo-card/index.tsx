import {
  Box,
  Card,
  Checkbox,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { CardTypes } from "./type";

const TodoCard = (props: CardTypes) => {
  const theme = useTheme();

  const handleDeleteTask = (taskId: number) => {
    props.deleteTask(taskId);
  };

  const handleTaskDone = (taskId: number) => {
    props.markTaskAsDone(taskId);
  };

  return (
    <Card
      sx={{
        padding: "8px 16px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        marginBottom: "12px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="checkbox-group">
          <Checkbox
            checked={props.task.done}
            onChange={() => handleTaskDone(props.task.id)}
          />
          <div className="task-txt">
            <Typography
              variant="body2"
              color="primary"
              style={
                props.task.done
                  ? {
                      textDecoration: "line-through",
                      textDecorationColor: theme.palette.grey[100],
                    }
                  : {}
              }
            >
              {props.task.title}
            </Typography>
            <Typography variant="caption" color={theme.palette.grey[100]}>
              {props.task.desc}
            </Typography>
          </div>
        </div>
        <IconButton
          color="secondary"
          onClick={() => handleDeleteTask(props.task.id)}
        >
          <DeleteIcon sx={{ cursor: "pointer" }} />
        </IconButton>
      </Box>
    </Card>
  );
};

export default TodoCard;
