import { ThemeProvider } from "@mui/material";
import theme from "./style/theme";
import "./style/index.css";
import TodoListForm from "./components/template/todo-list-form";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodoListForm />
    </ThemeProvider>
  );
}

export default App;
