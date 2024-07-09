import "./App.css";
import { useState } from "react";
import { CardOne } from "./components/card.jsx";

function App() {
  return (
    <>
      {/* <h1 className="bg-green-400">this is test</h1> */}
      <CardOne />
      <CardOne cardName="Card two" btnText="Don't click" />
    </>
  );
}

export default App;
