import React from "react";

import { ToggleButtons } from "@base-components";

function App() {
  return (
    <div className="app-container">
      Hola papito
      <ToggleButtons values={["WEB", "ANDROID", "IOS"]} />
    </div>
  );
}

export default App;
