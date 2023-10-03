import { Button, Stack } from "@mui/material";

const MuiButton = () => {
  return (
    <Stack spacing={2} direction={"row"}>
      <Button variant={"text"}>Text Button</Button>
      <Button variant="contained">Contained Button</Button>
      <Button variant="outlined">Outlined Button</Button>
    </Stack>
  );
};

export default MuiButton;
