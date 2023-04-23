import React from "react";
import CheckIcon from "@mui/icons-material/Check";

import { ToggleButton } from "@base-components";

function App() {
  return (
    <div className="app-container">
      Hola papito
      <ToggleButton value="check" color="red" selected={false}>
        <CheckIcon />
      </ToggleButton>
    </div>
  );
}

export default App;
