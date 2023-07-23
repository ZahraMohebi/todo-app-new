import Header from "../../molecule/form-header";
import Body from "../../molecule/form-body";
import { FormPropsType } from "./type";

const Form = (props: FormPropsType) => {
  return (
    <div>
      <Header />
      <Body addTask={props.addTask} />
    </div>
  );
};

export default Form;
