import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { FilterCardPropsType } from "./type";
import { ChangeEvent } from "react";

const FilterGroup = (props: FilterCardPropsType) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.setFilterVal(event.target.value);
  };

  return (
    <FormControl>
      <RadioGroup row value={props.filterVal} onChange={handleChange}>
        <FormControlLabel
          value="all"
          control={<Radio />}
          label={<Typography variant="caption">All</Typography>}
        />
        <FormControlLabel
          label={<Typography variant="caption">Completed</Typography>}
          value="completed"
          control={<Radio />}
        />
        <FormControlLabel
          value="uncompleted"
          control={<Radio />}
          label={<Typography variant="caption">Uncompleted</Typography>}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default FilterGroup;
