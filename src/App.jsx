import React, { useState } from "react";

import ScoresTable from "./test-cmp/ScoresTable/ScoresTable";

function App() {
  const [dataList, setDataList] = useState([]);

  const [name, setName] = useState("");
  const [algo, setAlgo] = useState(0);
  const [front, setFront] = useState(0);

  const confirmButtonHandler = () => {
    if (name?.length && algo >= 0 && front >= 0) {
      setDataList((d) => [...d, { name, algo, front }]);
      setName("");
      setAlgo(0);
      setFront(0);
    }
  };

  const clearButtonHandler = () => {
    setDataList([]);
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <div className="inputs-container">
          <div className="labeled-input-wrapper">
            <p>candidate name:</p>
            <input
              id="js_button_name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="labeled-input-wrapper">
            <p>algorithm score:</p>
            <input
              id="js_button_algo"
              type="number"
              value={algo}
              onChange={(e) => setAlgo(+e.target.value)}
            />
          </div>
          <div className="labeled-input-wrapper">
            <p>frontend score:</p>
            <input
              id="js_button_front"
              type="number"
              value={front}
              onChange={(e) => setFront(+e.target.value)}
            />
          </div>
        </div>
        <div className="buttons-container">
          <button
            type="button"
            className="clear_js"
            onClick={clearButtonHandler}
          >
            Clear all
          </button>
          <button
            type="button"
            className="confirm_js"
            onClick={confirmButtonHandler}
          >
            Confirm
          </button>
        </div>
      </div>
      <ScoresTable dataList={dataList} />
    </div>
  );
}

export default App;
