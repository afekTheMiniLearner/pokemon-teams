import React from "react";

import { ToggleDataButtons } from "@components";
import { TOGGLE_DATA_OPTIONS } from "@utils";

function App() {
  return (
    <div className="app-container">
      <ToggleDataButtons values={TOGGLE_DATA_OPTIONS} />
    </div>
  );
}

export default App;
