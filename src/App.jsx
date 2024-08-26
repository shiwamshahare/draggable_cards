import React from "react";
import BackGround from "./components/BackGround";
import ForeGround from "./components/ForeGround";

const App = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <BackGround />
      <ForeGround />
    </div>
  );
};

export default App;
