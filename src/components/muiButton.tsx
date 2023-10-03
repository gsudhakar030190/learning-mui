import {
  Button,
  Stack,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
//import { SendIcon } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

const MuiButton = () => {
  const [formatTypes, setFormatTypes] = useState<string[]>([]);
  console.log(formatTypes);
  const handleFormatArray = (
    e: React.MouseEvent<HTMLElement>,
    updatedFormats: string[]
  ) => {
    setFormatTypes(updatedFormats);
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={"row"}>
        <Button variant={"text"}>Text Button</Button>
        <Button variant="contained">Contained Button</Button>
        <Button variant="outlined">Outlined Button</Button>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <Button variant="text" color="primary">
          Primary Text
        </Button>
        <Button variant="contained" color="secondary">
          Secondary contained
        </Button>
        <Button variant="outlined" color="success">
          Success Outlined
        </Button>
        <Button variant="contained" color="error">
          Error Contained
        </Button>
      </Stack>
      <Stack spacing={2} direction={"row"} display="block">
        <Button variant="contained" size="small">
          S
        </Button>
        <Button variant="contained" size="medium">
          M
        </Button>
        <Button variant="contained" size="large">
          L
        </Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <ButtonGroup variant="contained" size="small" color="success">
          <Button onClick={() => alert("clicked")}>One</Button>
          <Button onClick={() => alert("clicked")}>Two</Button>
          <Button onClick={() => alert("click")}>Three</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <ButtonGroup
          variant="outlined"
          size="medium"
          color="secondary"
          orientation="vertical"
        >
          <Button onClick={() => alert("clicked")}>One</Button>
          <Button onClick={() => alert("clicked")}>Two</Button>
          <Button onClick={() => alert("click")}>Three</Button>
        </ButtonGroup>
      </Stack>
      <Stack spacing={2}>
        <ToggleButtonGroup
          value={formatTypes}
          color="secondary"
          onChange={handleFormatArray}
          size="large"
        >
          <ToggleButton value="Left">Left</ToggleButton>
          <ToggleButton value="Center">Center</ToggleButton>
          <ToggleButton value="Right">Right</ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
