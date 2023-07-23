import { Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <Typography variant="h6" color="secondary" sx={{ marginBottom: 2 }}>
        CREATE A TODO
      </Typography>
      <Typography variant="body2" color="primary" sx={{ marginBottom: 2 }}>
        What's on your todo list?
      </Typography>
    </>
  );
};

export default Header;
