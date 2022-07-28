import React from "react";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <>
      <div className="container mt-4">
        <h2 className="bg-success p-2">Ricky and Morth</h2>
        <List />
      </div>
    </>
  );
};

export default App;
