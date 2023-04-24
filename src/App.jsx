import React from "react";

import { Card } from "@base-components";

function App() {
  return (
    <div className="app-container">
      <Card
        imageUrl="/pokemons/charizard.jpg"
        title="Charizard"
        information="The strongest pokemon to ever exist IMO"
      />
    </div>
  );
}

export default App;
