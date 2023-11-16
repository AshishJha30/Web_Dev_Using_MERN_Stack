import "./App.css";
import React from "react";
import { useState } from "react";


function App() {

  const[count, setCount] = useState(0);

    // let count = 0;
  function decrementHandler() {
    setCount(count-1);
    // count = count -1;
  }

  function incrementHandler() {
    setCount(count+1);
  }

  function resetHandler() {
    setCount(0);
  }

  return (
   <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[#0398d4] font-medium text-2xl">
        <h1 className="title">Increment And Decrement</h1>
      </div>

      <div className="bg-white flex justify-center gap-10 py-3 rounded-sm
      text-[25px] text-[#344151]" >
  
        <button onClick={decrementHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
         -
        </button>

        <div className="font-bold gap-12 text-5xl">
        {count}
        </div>

        <button onClick={incrementHandler} className="border-l-2 text-center w-20
        border-[#bfbfbf] text-5xl">
          +
        </button>
      </div>

        <button onClick={resetHandler} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg">
          Reset
        </button>

   </div>
  );
}

export default App;
