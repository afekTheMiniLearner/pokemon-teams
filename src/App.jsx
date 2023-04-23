import React from "react";
import DraftsIcon from "@mui/icons-material/Drafts";

import { GamesList } from "@components";

function App() {
  const list = [
    {
      text: "Fire red",
      icon: <DraftsIcon />,
    },
    {
      text: "Leaf green",
    },
  ];
  return (
    <div className="app-container">
      <GamesList items={list} />
    </div>
  );
}

export default App;
