import React, { useState } from "react";

import { GamesList } from "@components";
import { GAMES_LIST } from "@utils";

function App() {
  const [currentGame, setCurrentGame] = useState(undefined);

  console.log("🚀 ~ file: App.jsx:9 ~ App ~ currentGame:", currentGame);

  return (
    <div className="app-container">
      <GamesList items={GAMES_LIST} onClick={setCurrentGame} />
    </div>
  );
}

export default App;
