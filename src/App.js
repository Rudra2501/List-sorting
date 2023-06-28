import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  const [listTitle, setListTitle] = useState("My List");

  const [showInDescending, setShowInDescending] = useState(false);

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const changeOrderHandler = useCallback(() => {
    setShowInDescending((prev) => !prev);
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList
        title={listTitle}
        showInDescending={showInDescending}
        items={listItems}
      />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeOrderHandler}>
        {showInDescending
          ? "Show in Ascending Order"
          : "Show in Descending Order"}
      </Button>
    </div>
  );
}

export default App;
